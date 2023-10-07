import React, {useState} from "react";
import {Document, Page} from 'react-pdf';

function FileInput({setFile}) {

    const [selectedFile, setSelectedFile] = useState();
    const [submittedFile, setSubmittedFile] = useState();

    return (<section id="fileinput" className="text-white bg-neutral ">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="mx-auto max-w-lg text-center">
                <h2 className="text-3xl font-bold lg:text-5xl">Please upload your file.</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 mt-8">
                <div className="content-center justify-self-center">
                    <div className="items-center justify-self-center text-info ">
                        <input type="file"
                               className="file-input file-input-bordered w-full max-w-xs"
                               onChange={(e) => setSelectedFile(e.target.files[0] ? URL.createObjectURL(e.target.files[0]) : setSubmittedFile())}
                        />
                    </div>
                </div>
                <div className="content-center justify-self-center">
                    <a className="inline-block rounded-full border border-indigo-600 p-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                       target="_blank" onClick={(e) => setFile(selectedFile)}>
                        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>);
}

export default FileInput;

