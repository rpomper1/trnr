import { User } from "@nextui-org/react";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col gap-5 p-6 leading-8 text-start items-start">
      <h1 className="text-2xl font-semibold">Tko smo mi?</h1>
      <p>
        Ova aplikacija napravljena je u svrhu izrade projektnog zadatka iz
        kolegija “Osnove marketinga” u sklopu Ekonomskog fakulteta u Zagrebu.
        Njen primarni cilj je olakšati potrošačima odabir proizvoda ili linije
        proizvoda najpovoljnijih za njihov specifičan tip kose. Aplikacija je
        napravljena u obliku upitnika koji sadrži deset kratkih pitanja o
        karakteristikama Vaše kose, a na kraju upitnika, klikom na gumb
        “Pošalji” dobit ćete personaliziranu preporuku proizvoda/linije
        proizvoda na temelju Vaših odgovora. Također, aplikacija sadrži filter
        pomoću kojeg je moguće odrediti cjenovni prag ovisno o Vašem budžetu.
        Ova aplikacija napravljena je s ciljem da se ojača pozicija brendova
        Gliss, Syoss te Schauma na tržistu, koji djeluju u okviru poduzeća
        Henkel, a upravo je povećanje prodaje i poboljšanje tržišne pozicije
        jedan od zadataka ovog timskog projekta.
      </p>
      <h2 className="text-xl font-semibold">Članovi tima:</h2>
      <div className="flex flex-col md:flex-row gap-10 md:gap-15 items-start md:justify-center">
        <User
          name="Martina Pintarić"
          description="0067664309"
          avatarProps={{ name: "MP", size: "xl" }}
        />
        <User
          name="Paula Pejić Bach"
          description="0067657071"
          avatarProps={{ name: "PPB", size: "xl" }}
        />
        <User
          name="Jelena Pavlinović"
          description="0067670745"
          avatarProps={{ name: "JP", size: "xl" }}
        />
        <User
          name="Luka Pavlović"
          description="0067668376"
          avatarProps={{ name: "LP", size: "xl" }}
        />
        <User
          name="Toni Petrov"
          description="0067658789"
          avatarProps={{ name: "TP", size: "xl" }}
        />
      </div>
    </div>
  );
}
