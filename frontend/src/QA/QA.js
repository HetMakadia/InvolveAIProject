import React, {useState} from "react";
import axios from "axios";

function QA({File, setFile}) {
    const [inputValue, setInputValue] = useState("");
    const [displayValue, setDisplayValue] = useState("");

    const handleSubmit = async (e) => {
        // e.preventDefault();
        // const request = {query: inputValue};
        const formData = new FormData();
        formData.append("file", File.replace('blob:', ''));
        formData.append("query", inputValue);
        try {
            const response = await axios.post("http://127.0.0.1:8000/", formData);
            console.log(response)
            const data = response.data;
            setDisplayValue(data);
            if (data) {
                setInputValue("");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (<section id="qa" className="text-white bg-neutral ">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="mx-auto max-w-lg text-center">
                <h2 className="text-3xl font-bold lg:text-5xl">Have a chat with your document.</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 mt-8">
                <div className="content-center justify-self-center">
                    <div className="form-control w-full max-w-xs ">
                        <label className="label">
                            <span className="label-text">Ask a Question!</span>
                        </label>

                        <div className="grid grid-cols-12">
                            <input type="text"
                                   placeholder="Type here"
                                   value={inputValue}
                                   onChange={(e) => setInputValue(e.target.value)}
                                   required
                                   className="input input-bordered w-full max-w-xs col-span-10"/>
                            <div className="col-span-1"></div>
                            <div className="col-span-1">
                                <a className="inline-block rounded-full border border-indigo-600 p-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                                   onClick={(e) => handleSubmit()}>
                                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <br/>
                        {displayValue ?
                            <textarea className="textarea" placeholder={displayValue} disabled></textarea> : null}
                        <br/>
                        <div>
                            <a className="group relative inline-flex items-center overflow-hidden rounded border border-current px-6 py-3 mr-3 text-gray-600 hover:text-white focus:outline-none focus:ring active:text-indigo-500"
                               onClick={(e) => setFile(null)}>
                                            <span className="absolute -start-full transition-all group-hover:start-4">
                                                <svg className="h-5 w-5 rotate-180" xmlns="http://www.w3.org/2000/svg"
                                                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                                </svg>
                                            </span>
                                <span className="text-sm text-white font-medium transition-all group-hover:ms-4">
                                                Chat with different document.
                                            </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>);
}

export default QA;
