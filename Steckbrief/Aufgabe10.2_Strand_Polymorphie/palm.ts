namespace BeachClasses10_2 {
    export class Palm extends Immovable {
        // position: Vector;


        // constructor() {
        //     this.position.x = Math.random() * 165;
        //     this.position.y = (Math.random() * 120) + horizon;
        // }
        draw(): void {
            //Stamm
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(6, 0);
            crc2.lineTo(8, -10);
            crc2.lineTo(6, -10);
            crc2.lineTo(8, -18);
            crc2.lineTo(6, -18);
            crc2.lineTo(8, -26);
            crc2.lineTo(6, -26);
            crc2.lineTo(7, -34);
            crc2.lineTo(-1, -34);
            crc2.lineTo(0, -26);
            crc2.lineTo(-2, -26);
            crc2.lineTo(0, -18);
            crc2.lineTo(-2, -18);
            crc2.lineTo(0, -10);
            crc2.lineTo(-2, -10);
            crc2.closePath();
            crc2.fillStyle = "#CF5616";
            crc2.fill();
            //Blätter rechts
            crc2.translate(0, -34);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.bezierCurveTo(20, -10, 20, 10, 20, 17);
            crc2.bezierCurveTo(20, 30, 20, 10, 0, 0);
            crc2.bezierCurveTo(20, -15, 25, -10, 30, 10);
            crc2.bezierCurveTo(20, -5, -10, 0, 0, 0);
            crc2.bezierCurveTo(20, -25, 25, -20, 40, -5);
            crc2.bezierCurveTo(30, -20, -10, 5, 0, 0);
            crc2.closePath();
            crc2.fillStyle = "#B58700";
            crc2.fill();
            //Blätter links
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.translate(6, 0);
            crc2.scale(-1, 1);
            crc2.bezierCurveTo(20, -5, 20, 10, 20, 17);
            crc2.bezierCurveTo(20, 35, 20, 10, 0, 0);
            crc2.bezierCurveTo(25, -14, 25, -10, 30, 10);
            crc2.bezierCurveTo(30, -5, -10, 0, 0, 0);
            crc2.bezierCurveTo(10, -25, 25, -20, 40, -5);
            crc2.bezierCurveTo(30, -20, -10, 5, 0, 0);
            crc2.closePath();

            crc2.fillStyle = "#7C8400"; 
            crc2.fill();
            crc2.restore();
        }
    }
}