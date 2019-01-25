import * as React from "react";

interface BasicProps {
	info: string;
	index: number;
	deleteFunc: (thingIndex: number) => void;
}

function Basic(props: BasicProps) {
	return <p>{props.info}<span className="delete" onClick={() => {props.deleteFunc(props.index)}}>x</span></p>
}

export default Basic;
