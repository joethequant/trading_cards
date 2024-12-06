import Image from "next/image";
import { getCardsData } from "@/utilities/getCards";

export default async function Home() {
  // Fetch card data
  const cards = await getCardsData();

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
      <div className="grid gap-6 w-full max-w-screen-lg grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))]">
        {cards.map((card, index) => (
          <div
            key={index}
            className="border-4 border-black bg-yellow-50 shadow-md flex flex-col"
            style={{ width: "240px", height: "340px" }}
          >
            <div className="h-9 bg-yellow-600 flex justify-evenly items-center font-bold text-lg border-b-2 border-black uppercase">
              <div>
                {card.evolution_level && (
                  <span className="text-md">{card.evolution_level} </span>
                )}
                {card.name}{" "}
              </div>
              <div>
                {card.symbol} {card.value}
              </div>
            </div>
            <div className="flex-1 bg-white border-2 border-black m-1 flex justify-center items-center size-56">
              <Image
                src={`/cards/${card.imageSrc}`}
                alt="Card Image"
                width={220}
                height={220}
              />
            </div>
            <div className="bg-yellow-50 p-1 border-t-2 border-black text-xs">
              <div className="text-gray-800 h-12 pb-1">
                {card.attacks.map((attack, attackIndex) => (
                  <div key={attackIndex}>
                    <strong>
                      {attack.symbol} {attack.name} ({attack.damage})
                    </strong>
                  </div>
                ))}
              </div>
              <div className="font-semibold text-gray-800 h-3">
                {card.specials && (
                  <>
                    <hr />

                    {card.specials.map((special, specialIndex) => (
                      <div key={specialIndex}>
                        <strong>{special.action}</strong>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
