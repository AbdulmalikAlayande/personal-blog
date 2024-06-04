import React, {useState} from 'react';
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {oneDark} from 'react-syntax-highlighter/dist/esm/styles/prism';


function CodeSnippet(props) {

    const [isCopied, setCopied] = useState(false)

    function copyCode(event) {
        event.preventDefault();
        navigator.clipboard
            .writeText(props.code)
            .then((response) => {
                console.log(response.message)
                setCopied(true)
            })
    }

    return (
        <div
            className={"w-full p-4 xl:px-12 h-auto xl:py-5 rounded-lg shadow-shadowOne flex flex-col justify-between gap-4 bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000"}>
            <div className={"w-full h-[20px] flex flex-row justify-between"}>
                <p className={"text-designColor"}>{props.language}</p>
                <button className={"hover:text-designColor"} onClick={copyCode}>{!isCopied ? "copy" : "copied"}</button>
            </div>
            <pre>
                <SyntaxHighlighter wrapLongLines={true} showLineNumbers={true} language={props.language.toLowerCase()}
                                   style={oneDark}>
                    {props.code}
                </SyntaxHighlighter>
            </pre>
        </div>
    );
}

CodeSnippet.propTypes = {
    code: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
}

export default CodeSnippet