import fs from "fs";
import path from "path";

export async function getCardsData() {
  const cardsDir = path.join(process.cwd(), "src/data/cards"); // Ensure the directory exists
  const files = fs.readdirSync(cardsDir); // Read all files in the directory

  let cardsData = [];
  for (const file of files) {
    if (file.endsWith(".json")) {
      const filePath = path.join(cardsDir, file);
      const fileContent = JSON.parse(fs.readFileSync(filePath, "utf8"));
      cardsData = cardsData.concat(fileContent);
    }
  }

  return cardsData; // Return combined card data
}
