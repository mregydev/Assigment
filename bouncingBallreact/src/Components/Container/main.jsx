import React from 'react'

import Welcome from '../Functional/Welcome.jsx'

class MainComponent extends React.Component {

    constructor() {
        super()

        this.currentY = 0

        this.dx = 10

        this.dy = 10

        this.x=0
        
        this.y=0
    }


    drawBall(ctx)
    {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    updateContent() {
        let canvas = this.refs.testcanvas
        let ctx = canvas.getContext("2d")
        let ballRadius=10

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.drawBall(ctx)
        
        if (this.x + this.dx > canvas.width - ballRadius || this.x + this.dx < ballRadius) {
            this.dx = -this.dx;
        }
        if (this.y + this.dy > canvas.height - ballRadius || this.y + this.dy < ballRadius) {
            this.dy = -this.dy;
        }

        this.x+=this.dx
        this.y+=this.dy

    }

    start()
    {
      this.timer=  setInterval(() => this.updateContent(), 100)
    }

    render() {
        return <div> <canvas ref="testcanvas" width={640} height={425} /><button onClick={this.start.bind(this)}>Start</button></div>
    }
}


export default MainComponent