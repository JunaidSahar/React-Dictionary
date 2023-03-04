import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Body() {
  const [search, setSearch] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [phonetics, setPhonetics] = useState([]);
  const [data, setData] = useState([]);

  const handleSearchOnChange = (e) => {
    setSearch(e.target.value);
  };

  const api = async () => {
    try {
      const apiData = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/" + search
      );
      setData(apiData.data[0]);
      setMeanings(apiData.data[0].meanings);
      setPhonetics(apiData.data.phonetics);
    } catch (err) {
      console.log(err);
    }
  };
  const searchText = () => {
    api();
    // console.log(data.data[0].word);
  };

  // useEffect(() => {
  //   // api();
  //   console.log(data);
  // }, [search]);
  return (
    <div className="bg-[#081c15] h-screen w-full">
      <div className="container mx-auto py-12 px-8">
        <div className="flex items-center gap-16 justify-between">
          <div className="w-5/12  space-y-5">
            <h1 className="text-white font-normal">
              <span className="text-7xl text-[#b7e4c7] font-medium">
                {" "}
                Hi there,
              </span>{" "}
              <br></br> Lets find something spacial here
            </h1>
            <div className="flex gap-3">
              <input
                onChange={handleSearchOnChange}
                className="bg-transparent text-[#95d5b2] px-6 py-2 placeholder:text-[#95d5b2] border w-full"
                placeholder="Type here"
                value={search}
              />
              <button onClick={searchText} className="text-white border px-6">
                Search
              </button>
            </div>
          </div>
          {data && (
            <div className="w-full text-white uppercase text-[8rem]">
              <h2>{data.word}</h2>
              {/* {phonetics && <p>{phonetics.text}</p>} */}
            </div>
          )}
        </div>
        <div className="space-y-6">
          <h3 className="text-5xl text-[#95d5b2] mb-5">Meanings</h3>
          <p className="flex gap-2">
            {meanings &&
              meanings.map((d, index) => (
                <li className="list-none text-white" key={d.index}>
                  {d.partOfSpeech}
                </li>
              ))}
          </p>
          <p className="text-white text-xl space-y-2 gap-2">
            Definitions
            {meanings &&
              meanings.map((d, index) =>
                d.definitions.map((def, index) => (
                  <li className="mt-5 text-sm">{def.definition}</li>
                ))
              )}
          </p>
          {/* <span>{meanings[1].}</span> */}
        </div>
      </div>
    </div>
  );
}

export default Body;
