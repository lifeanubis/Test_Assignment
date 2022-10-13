const getEpisodes = async () => {
  interface final_array {
    air_date: string;
    created: string;
    characters: string[];
    episode: string;
    id: number;

    name: string;
    url: string;
  }

  try {
    const episodes = await fetch("https://rickandmortyapi.com/api/episode");
    const episodes_data = await episodes.json();
    episodes_data.results.map((item: any) => {
      const characters_array: string[] = [];
      item.characters.map(async (ele: string) => {
        try {
          const characters = await fetch(ele);
          const character_data: string = await characters.json();
          characters_array.push(character_data);
          return characters_array;
        } catch (error) {
          console.log(error);
        }
      });
      const final_array: final_array[] = [
        {
          air_date: item.air_date,
          created: item.created,
          characters: characters_array,
          episode: item.episode,
          id: item.id,

          name: item.name,
          url: item.url,
        },
      ];
      return console.log(final_array);
    });
  } catch (error) {
    console.log(error);
  }
};
getEpisodes();
