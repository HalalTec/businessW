import React, { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5radar from '@amcharts/amcharts5/radar';
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const Email = () => {

    const queryString = window.location.search;

    const params = new URLSearchParams(queryString)

    const parameters = {}

    for(const [key, value] of params) {
        if (!parameters[key]) {
            parameters[key]=[]
        }

        parameters[key].push(value)
    }

    const sortedParameters = Object.entries(parameters).map(([key, values]) => {
        return { key, values };
      });
    
      const sorted = [...sortedParameters].sort((a, b) => {
        const valueA = parseInt(a.values[2], 10) || 0; 
        const valueB = parseInt(b.values[2], 10) || 0; 
        return valueB - valueA; 
      });
      
      useEffect(() => {
        // Create root element
        const root = am5.Root.new('chartdiv');

        // Set themes
        root.setThemes([am5themes_Animated.new(root)]);

        // Create chart
        const chart = root.container.children.push(
            am5radar.RadarChart.new(root, {
                panX: false,
                panY: false,
                wheelX: 'panX',
                wheelY: 'zoomX',
            })
        );

        // Create axes and their renderers
        const xRenderer = am5radar.AxisRendererCircular.new(root, {});
        xRenderer.labels.template.setAll({
            radius: 10,
        });

        const xAxis = chart.xAxes.push(
            am5xy.CategoryAxis.new(root, {
                maxDeviation: 0,
                categoryField: 'category',
                renderer: xRenderer,
                tooltip: am5.Tooltip.new(root, {}),
            })
        );

        const yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                min: 0,
                max: 10,
                renderer: am5radar.AxisRendererRadial.new(root, {
                    minGridDistance: 20,
                }),
            })
        );

        yAxis.get('renderer').labels.template.set('forceHidden', true);

        // Create series for current satisfaction
        const currentSeries = chart.series.push(
            am5radar.RadarColumnSeries.new(root, {
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: 'currentValue',
                categoryXField: 'category',

            })
        );


      

        currentSeries.columns.template.setAll({
            tooltipText: 'Domain {category}',
            templateField: 'columnSettings',
            strokeOpacity: 0,
            width: am5.p100,
        });

     
        // Set data
        const data = []

        sorted.map((category, index) => {
            data.push({ category: index+1, currentValue: category.values[0],  columnSettings: { fill: chart.get('colors').next() } })
        })

        



        currentSeries.data.setAll(data);
        xAxis.data.setAll(data);

        // Animate chart
        currentSeries.appear(1000);
        chart.appear(1000, 100);

        // Cleanup function
        return () => {
            root.dispose();
        };

    }, []);

    const save = () => {
        const input = document.getElementById('res');

        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            const imgWidth = 190; // PDF width in mm
            const pageHeight = pdf.internal.pageSize.height;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;

            let position = 0;

            pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save('download.pdf');
        })
    }
    
    return ( <>

<div id='res' >
            <h1 style={{textAlign:"center"}}>Your Results</h1>
            
            <div className="result" id="result">
                <div className="pie">
                    <div id="chartdiv" className='chartdiv'></div>
                   
                </div>

                <div className="chart">
                    <table>
                        
                    <tr>
                            <th>No.</th>
                            <th>Life Domain</th>
                            <th>Now</th>
                            <th>Future</th>
                            <th>Difference</th>
                        </tr>
                        {sorted.map((category, index) => (
                        <tr key={index}>
                            <td>Domain {index+1}</td>
                            <td style={{textAlign:"left"}}>{category.key}</td>
                            <td>{category.values[0]}</td>
                            <td>{category.values[1]}</td>
                            <td>{category.values[2]}</td>
                        </tr>
                    ))}

                    </table>
                
                </div>
            </div>
                    <div className="observe">
                    <h3> Looking at your wheel above: </h3>
                    <li> How do you feel as you look at your wheel?</li>
                    <li>Are there any surprises for you?</li>
                    <li> How do you currently spend time in these areas?</li>
                    <li>How would you like to spend time in these areas?</li>
                    <li>What might you be avoiding looking at here?</li>
                    <li>For each one, what would make that score a 10/10?</li>
                    <li>What would definitely increase your score—even if it was really hard to do?</li>
                    <li>Describe what a score of 10 would look like in those areas?</li>
                    <li>Which of these categories would you most like to improve?</li>
                    <li>We're all so busy these days: How could you make space for these changes in your life?</li>
                    <li>What help and support might you need from others to make changes—and be more satisfied with your life?</li>
                    <li> So, what is the smallest step you could take to get started?</li>
                    <li>What will you do today or in the next 24 hours?</li>
                    <li>If there was one key action that would begin to bring everything into balance, what would it be?</li>
                    <li>What if time money/time/energy were not an issue? What could you do in each area?</li>
                    </div>
                    <div className='observe' style={{textAlign:"center", padding:"50px"}}>
                  <h3>  What is the Wheel of Life? </h3>
<p> The Wheel of Life is a powerful self-assessment tool designed to help you reflect on where you currently stand in key areas of your life and identify where you'd like to be in the future. </p>

<p> This simple yet comprehensive tool offers a clear snapshot of your overall well-being across multiple life domains. Think of it as a guide to creating balance and alignment, helping you move forward with intention and clarity. </p>

<h3> What is the Job Search Wheel? </h3>
<p> The Job Search Wheel is a self-assessment tool to be used to evaluate different aspects of your job search process. It helps identify strengths and areas for improvement by breaking down key elements involved in job hunting. </p>

<p> The tool would help you better understand where you may need to focus more attention to enhance your chances of finding the right job. </p>


<h3> What is the Career Wheel? </h3>
<p>The Career Wheel is a tailored tool to help professionals evaluate and reflect on where they currently stand in their career and where they aim to be. </p>

<p> This free assessment provides a holistic view of essential domains related to professional growth and well-being, offering a structured way to identify strengths, gaps, and actionable steps to accelerate success. </p>


<h3> What is the Relationship Wheel ? </h3>
<p> The Relationship Wheel is a tool designed to help you reflect on the current state of your relationships and identify areas where improvement could lead to deeper connection and fulfillment. </p>

<p>This free assessment offers a holistic view of essential relationship dynamics, giving you insights into where you are thriving, where adjustments might be needed, and how to move forward toward meaningful growth together. </p>

<h3> What is the Business Wheel? </h3>
<p> The Business Wheel is a tool designed to help you assess the current state of your business across key operational areas and identify where improvements are needed to achieve long-term success. </p>

<p>This free assessment provides a comprehensive view of your business health, allowing you to pinpoint strengths, spot gaps, and map out a strategy for growth and sustainability. </p>


<h3> What is the C-Suite Readiness Wheel </h3>
<p> The C-Suite Readiness Wheel is a tool designed to help professionals evaluate their preparedness for senior leadership roles. It provides a structured assessment across the essential competencies required to thrive at the executive level. </p>

<p> This free assessment tool helps you reflect on where your strengths lie, identify areas for improvement, and strategize ways to develop the skills and mindset necessary for C-suite success. </p>
                    </div>
            <div className="below">
            <h3>Ready for the next step?</h3>
            <button onClick={save}>Download Your Result </button>
            </div>
            </div>
            <div>
            <footer>	Made with ❤ by <a href="https://www.discoveryourvalues.com/">Discover Your Values</a></footer>
            </div>

            

    

    </> );
}
 
export default Email;