import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    templateUrl: './login.html'
})

export class Login {
    @ViewChild('canvasBackground') canvasBackground: ElementRef;
    private windowWidth: number;
    private windowHeight: number;
    private stars: any = [];
    private context: any;
    private starsNum: number = 0;
    private rnd: number = 0;
    constructor() {

    }

    ngAfterViewInit() {
        this.windowWidth = document.body.clientWidth;
        this.windowHeight = document.body.clientHeight;

        let canvas = this.canvasBackground.nativeElement;

        canvas.width = this.windowWidth;
        canvas.height = this.windowHeight;

        this.starsNum = 500;

        this.context = canvas.getContext('2d');

        this.addStar();

        setInterval(() => {
            this.render();
        }, 33);

        this.meteor();
    }

    addStar() {
        for (var i = 0; i < this.starsNum; i++) {
            var aStar = {
                x: Math.round(Math.random() * this.windowWidth),
                y: Math.round(Math.random() * this.windowHeight),
                r: Math.random() * 3,
                ra: Math.random() * 0.05,
                alpha: Math.random(),
                vx: Math.random() * 0.2 - 0.1,
                vy: Math.random() * 0.2 - 0.1
            }
            this.stars.push(aStar);
        }
    }

    render() {
        this.context.fillStyle = 'rgba(0,0,0,0.1)';
        this.context.fillRect(0, 0, this.windowWidth, this.windowHeight);

        for (var i = 0; i < this.starsNum; i++) {
            let star = this.stars[i];
            if (i == this.rnd) {
                star.vx = -5;
                star.vy = 20;
                this.context.beginPath();
                this.context.strokeStyle = 'rgba(255,255,255,' + star.alpha + ')';
                this.context.lineWidth = star.r;
                this.context.moveTo(star.x, star.y);
                this.context.lineTo(star.x + star.vx, star.y + star.vy);
                this.context.stroke();
                this.context.closePath();
            }
            star.alpha += star.ra;
            if (star.alpha <= 0) {
                star.alpha = 0;
                star.ra = -star.ra;
                star.vx = Math.random() * 0.2 - 0.1;
                star.vy = Math.random() * 0.2 - 0.1;
            } else if (star.alpha > 1) {
                star.alpha = 1;
                star.ra = -star.ra
            }
            star.x += star.vx;
            if (star.x >= this.windowWidth) {
                star.x = 0;
            } else if (star.x < 0) {
                star.x = this.windowWidth;
                star.vx = Math.random() * 0.2 - 0.1;
                star.vy = Math.random() * 0.2 - 0.1;
            }
            star.y += star.vy;
            if (star.y >= this.windowHeight) {
                star.y = 0;
                star.vy = Math.random() * 0.2 - 0.1;
                star.vx = Math.random() * 0.2 - 0.1;
            } else if (star.y < 0) {
                star.y = this.windowHeight;
            }
            this.context.beginPath();
            let bg = this.context.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.r);
            bg.addColorStop(0, 'rgba(255,255,255,' + star.alpha + ')')
            bg.addColorStop(1, 'rgba(255,255,255,0)')
            this.context.fillStyle = bg;
            this.context.arc(star.x, star.y, star.r, 0, Math.PI * 2, true);
            this.context.fill();
            this.context.closePath();
        }
    }

    meteor() {
        let time = Math.round(Math.random() * 3000 + 33);
        setTimeout(function () {
            this.rnd = Math.ceil(Math.random() * this.starsNum.length)
            this.meteor();
        }, time);
    }
}
