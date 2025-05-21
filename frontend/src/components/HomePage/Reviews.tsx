import Card from "./Card";

const Reviews = () => {
  return (
    <div className="flex flex-col">
      <div className="ml-10 font-extrabold font-sans text-3xl text-orange-400">
        Recensioni
      </div>

      {/* Container scrollabile orizzontalmente */}
      <div className="relative overflow-x-auto flex gap-6 p-10 snap-x snap-mandatory no-scrollbar">
        <div className="flex-none snap-center">
          <Card
            title="Paola F."
            description="Vorrei ringraziare ancora una volta L’Autofficina Gaglione 
            per avermi riparato la macchina in emergenza e riconsegnata in giornata. 
            Un problema improvviso e imprevisto alla mia auto di lunedì mattina mentre 
            andavo in ufficio mi ha costretto a fermarmi nei pressi dell’Autofficina. 
            Nella sfortuna sono stata fortunata a trovare loro. 
            Accoglienza, gentilezza, professionalità e onestà che non è scontato e anzi, 
            di questi tempi è una rarità!
            Conserverò il loro contatto anche se non sono di zona, perché vale la pena 
            fare qualche chilometro in più se si è certi del risultato e chissà, 
            potrei diventare anche loro cliente! Complimenti ancora!"
            rating={5}
          />
        </div>
        <div className="flex-none snap-center">
          <Card
            title="Ameandro I."
            description="Gianni e Emanuele, un'accoppiata vincente. Professionalità 
            e onestà che si riflettono nel loro lavoro,nei consigli e nei prezzi. 
            Oltre ogni aspettativa; con soddisfazione ho trovato il mio meccanico di fiducia."
            rating={5}
          />
        </div>
        <div className="flex-none snap-center">
          <Card
            title="Cristina T."
            description="Sono estremamente soddisfatta del servizio fornito da Autofficina 
            Gaglione. Ha riparato la mia macchina in un tempo incredibilmente breve e a 
            costi molto convenienti in pieno luglio. Inoltre, il suo atteggiamento gentile 
            e disponibile ha reso l'esperienza ancora più piacevole.
            Hanno usato grande competenza e professionalità nel risolvere il problema 
            della mia auto. Hanno diagnosticato il guasto permettendomi di partire in tempo
            per le mie vacanze.
            Non posso che elogiare la gentilezza e la cortesia di questa officina."
            rating={5}
          />
        </div>
        <div className="flex-none snap-center">
          <Card
            title="Paola B."
            description="Ho conosciuto Gianni Gaglione per motivi iniziali non inerenti 
            alla manutenzione della mia auto, ma perché un giorno, vedendomi in difficoltà 
            nell'effettuare il parcheggio per via del mio pancione da ottavo mese, 
            si offrì di aiutarmi parcheggiandomi la macchina. Ne ho apprezzato la spontanea 
            e rara gentilezza e da quel lontano giorno è diventato il mio meccanico di fiducia.
            Nell'officina, che conduce, insieme a suo figlio Emanuele, ho trovato sempre 
            grande professionalità e competenza. Sono dei veri Artigiani, che studiano 
            soluzioni per riparare pezzi anche quando sembra ci sia poco da salvare e nel 
            mio caso hanno fatto veri miracoli.
            Mi sento di consigliare la loro officina ad occhi chiusi anche perché l'onestà 
            che mettono nel loro lavoro è un bene raro e prezioso."
            rating={5}
          />
        </div>
        <div className="flex-none snap-center">
          <Card
            title="Tony G."
            description="Ogni volta che mi trasferisco in un nuovo Paese, una delle sfide 
            più ardue è trovare un meccanico di fiducia. 
            Sono un appassionato di sport motoristici e molto scrupoloso nel lavoro sulle 
            mie auto... posso dire con certezza di essere un cliente piuttosto esigente. 
            Pertanto, quando sono arrivato a Roma, mi sono preso il tempo di setacciare 
            le numerose officine sparse per la città, cercando di stabilire un rapporto... 
            non proprio un compito facile. Poi è arrivato il momento in cui avevo davvero 
            bisogno di un lavoro urgente e i preventivi e i tempi di consegna che ho 
            ricevuto erano incredibilmente ingestibili... Per fortuna, un amico mi ha 
            suggerito di tornare a trovare Giani e suo figlio Emanuele. 
            Il mio lavoro è stato eseguito in tempi rapidissimi, a un prezzo molto 
            ragionevole e, soprattutto, molto bene. Il rapporto padre-figlio è invidiabile 
            e il loro lavoro è svolto alla perfezione. Da allora, la fiducia reciproca 
            si è trasformata in un'amicizia che, devo ammettere, mi alleggerisce di un peso notevole."
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
