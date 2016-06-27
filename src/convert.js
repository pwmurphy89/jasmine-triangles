function findTypeOfTriangle(side1,side2,side3){
	
	if(invalidTriangle()){
		return "invalid triangle";
	}
	if (Equilateral()){
		return "Equilateral";
	}
	if (Isosceles()){
		return "Isosceles";
	}
	function invalidTriangle(){
		 return ((side1 + side2 <= side3) || (side1 + side3 <= side2) || (side2 + side3 <= side1));
	}
	function Equilateral(){
		return ((side1 == side2) && (side1 == side3) && (side2 == side3));
	}
	function Isosceles(){
		return ((side1 == side2) || (side1 == side3) || (side2 == side3));
	}
	return "Scalene";
}

