//Daniel Cu Sánchez - A01703613
// Gráficas computacionales

//Arraylist for elipses
ArrayList<PVector> figures = new ArrayList<PVector>();

void setup() {
  // Defining size of the screen
  size(600, 600);
  ellipseMode(RADIUS);

  //Initial array
  figures.add(new PVector(250, 250));

}

void mousePressed() {
  //Add elipses
  figures.add(new PVector(mouseX, mouseY));
  fill(170, mouseX, mouseY);
}

void keyPressed() {
  //Remove elipses
  if (!figures.isEmpty()) {
    figures.remove(0);
    fill(170, 57, 57);
  }
}

void draw() {
  background(34, 102, 102);
  //Paint elipses
  for (PVector p : figures) {
    ellipse(p.x, p.y, 20, 20);
  }
}
