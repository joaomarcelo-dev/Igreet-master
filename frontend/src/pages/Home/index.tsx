import './style.scss';

import Header from "../../components/Header"
import CardOptionsPages from "../../components/CardOptionsPages"
import listOfCardsPages from "../../utils/listOfCardsPages.utils"

export default function Home() {
  return (
    <>
    <Header />
      <section
        className="content-cards-options-pages-grid"
      >
        {
          listOfCardsPages.map((card) => {
            return (
              <CardOptionsPages
                key={card.id}
                title={card.title}
                uri={card.uri}
                active={card.active}
                Icon={card.icon}
              />
            )
          })
        }
      </section>
    </>
  )
}