class Child extends LivingCreature{
    constructor(x, y, index) {
        super(x,y,index);
        this.energy = 5;
    }
    getNewCoordinates1() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 1, this.y + 1],
            [this.x - 1, this.y + 1],
            
        ];
    }

    chooseCell1(character) {
        this.getNewCoordinates1();
        return super.chooseCell(ch);
    }

    getNewCoordinates2() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell2(character) {
        this.getNewCoordinates2();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    mul() {
        
        var newCell = random(this.chooseCell2(0));

        if (this.energy >= 10 && newCell) {
            var newchild = new Child(newCell[0], newCell[1], this.index);
            childArr.push(newchild);
            matrix[newCell[1]][newCell[0]] = 5;
            this.energy = 5;
        }
    }

    move() {


        var newCell = random(this.chooseCell1(0));
        this.energy--;
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 5;


            this.y = newY;
            this.x = newX;
            

        }

    }

    eat() {
   

        var newCells1 = this.chooseCell1(1);
        var newCells2 = this.chooseCell1(2);
        var newCells0 = newCells1.concat(newCells2);
        var newCells = random(newCells0);
        if (newCells) {
            var newX = newCells[0];
            var newY = newCells[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }

            this.y = newY;
            this.x = newX;
            this.energy += 2;

        }
    }

    die() {
        if(this.energy<=0){
            matrix[this.y][this.x] = 0
            for(var i in childArr){
                if(childArr[i].x==this.x && childArr[i].y==this.y){
                    childArr.splice(i,1)
                }
            }
        } 

    } 
}