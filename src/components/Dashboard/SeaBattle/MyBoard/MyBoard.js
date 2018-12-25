import React, {Component} from 'react';


class MyBoard extends Component {

    valueGet = (ev) => {
        // console.log(ev.target.innerText);
    };

    onDragStart = (ev) => {
        console.log(ev.target.className = "poccesed");
    };

    // When element over the droppable elem
    onDragOver = (ev) => {
        ev.preventDefault();
    };


    onDrop = (ev) => {

    };

    onDragLeave = (ev) => {

    };

    onDragEnd = (ev) => {

    };

    constructor(props) {
        super(props);
        this.state = {
            boardLetters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
        }
    }

    render() {
        return (
            <div className={"myBoar"}>

                <div className="ships">
                    <h3>Ships</h3>
                    {}
                    <div className="single">
                        <div className="one"
                             draggable onDragStart={this.onDragStart}
                             onDragEnd={(ev) => this.onDragEnd(ev)} onDragLeave={(ev) => this.onDragLeave(ev)}/>
                        <div className="one" draggable onDragStart={(e) => this.onDragStart(e, "one")}
                             onDragEnd={(ev) => this.onDragEnd(ev)} onDragLeave={(ev) => this.onDragLeave(ev)}/>
                        <div className="one" draggable onDragStart={(e) => this.onDragStart(e, "one")}
                             onDragEnd={(ev) => this.onDragEnd(ev)} onDragLeave={(ev) => this.onDragLeave(ev)}/>
                        <div className="one" draggable onDragStart={(e) => this.onDragStart(e, "one")}
                             onDragEnd={(ev) => this.onDragEnd(ev)} onDragLeave={(ev) => this.onDragLeave(ev)}/>
                    </div>
                    <div className="twe" draggable onDragEnd={(ev) => this.onDragEnd(ev)}
                         onDragLeave={(ev) => this.onDragLeave(ev)}>
                        <div className="one"/>
                        <div className="one"/>
                    </div>

                    <div className="three" draggable onDragStart={(e) => this.onDragStart(e, "three")}
                         onDragEnd={(ev) => this.onDragEnd(ev)} onDragLeave={(ev) => this.onDragLeave(ev)}>
                        <div className="one"/>
                        <div className="one"/>
                        <div className="one"/>
                    </div>
                    <div className="four" draggable onDragStart={(e) => this.onDragStart(e, "four")}
                         onDragEnd={(ev) => this.onDragEnd(ev)} onDragLeave={(ev) => this.onDragLeave(ev)}>
                        <div className="one"/>
                        <div className="one"/>
                        <div className="one"/>
                        <div className="one"/>
                    </div>
                </div>
                < table className={"boardTable"} onDrop={(e) => this.onDrop(e, "completed")}>
                    < tbody>
                    {this.state.boardLetters.map((itemL, indexL) => {
                        return <tr key={itemL}>
                            {/*<span className={"helperLetters"}>{itemL}</span>*/}
                            {this.state.boardLetters.map((item, index) => {
                                if (indexL < 9) {
                                    return <td onDragOver={(ev) => this.onDragOver(ev)} onClick={this.valueGet}/>
                                } else {
                                    return <>
                                        <td
                                            onDragOver={(ev) => this.onDragOver(ev)} key={index}
                                            onClick={this.valueGet}>
                                            {/*<span className={"helperNumbers"}>*/}
                                            {/*{index + 1}*/}
                                            {/*</span>*/}
                                        </td>
                                    </>
                                }
                            })}</tr>
                    })
                    }
                    </tbody>
                </table>
            </div>
        )
            ;
    }
}

export default MyBoard
