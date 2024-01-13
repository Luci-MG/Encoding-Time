// setup() is called once at page-load
function setup() {
    createCanvas(400, 400); // make an HTML canvas element width x height pixels  
    hrColor = color(120, 30, 150);   
    minColor = color(150, 50, 200);  
    secColor = color(190, 90, 220);       
    innerColor = color(220, 140, 255); 
}

// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();

    let innerRadius = 20;
    let secRadius = 60;
    let minRadius = 120;
    let hrRadius = 180;
    background(235);

    // mapping the time to 360 degress angles
    let angleSec = map(sec, 0, 60, -HALF_PI, TWO_PI - HALF_PI);
    let angleMin = map(min, 0, 60, -HALF_PI, TWO_PI - HALF_PI);
    let angleHr = map(hr, 0, 24, -HALF_PI, TWO_PI - HALF_PI);
    
    // getting the x and y of hour intersection
    let x_hr = cos(angleHr) * (hrRadius - minRadius);
    let y_hr = sin(angleHr) * (hrRadius - minRadius);
    
    // getting the x and y of min intersection
    let x_min = x_hr + cos(angleMin) * (minRadius - secRadius);
    let y_min = y_hr + sin(angleMin) * (minRadius - secRadius);
    
    // getting the x and y of sec intersection
    let x_sec = x_min + cos(angleSec) * (secRadius - innerRadius);
    let y_sec = y_min + sin(angleSec) * (secRadius - innerRadius);
    
    // hour circle
    fill(hrColor);
    ellipse(width / 2, height / 2, hrRadius * 2, hrRadius * 2);
    
    // min circle
    fill(minColor);
    ellipse(width / 2 + x_hr, height / 2 + y_hr, minRadius * 2, minRadius * 2);
    
    // sec circle
    fill(secColor);
    ellipse(width / 2 + x_min, height / 2 + y_min, secRadius * 2, secRadius * 2);

    // inner circle for intersection
    fill(innerColor);
    ellipse(width / 2 + x_sec , height / 2 + y_sec, innerRadius * 2, innerRadius * 2);
}