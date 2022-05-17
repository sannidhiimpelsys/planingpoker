/*import Popup from "../invite/popup";*/
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useState, useEffect } from "react";
import "./Sharelink.css";
import {CopyToClipboard} from 'react-copy-to-clipboard';


function ShareLink() {
  /* const prom = new Promise();*/
  /* setTimeout(() => {
    const myURL = new URL(window.location.href);
    console.log(myURL.searchParams.get("name"));
  }, 2000);*/
  const [copied, setCopied] =useState(false);
  const [k, sk] = useState("");
  useEffect(() => {
    /*var myURL = window.location.href;
    alert(myURL.searchParams.("name"));*/
    const queryParams = new URLSearchParams(window.location.search);
    const cal = queryParams.get("cardVale");
      // const name = queryParams.get("name");
    const type = queryParams.get("room");
    const linkz = window.location.href.slice(0,window.location.href.lastIndexOf('/'));

    var kite =
      linkz + "/poker?name=&room=" + type + "&cardVale=" + cal;
    // queryParams.set(name, "eafesf")
    
    sk(kite);
  }, []);
  /*const offset = {
    left: 150,
    top: 50,
  };*/
 
  return (
    <div className="Share">
      <label htmlFor="popup-2" className="sr-only">ShareLink</label>
        <Popup aria-label="Copied"
          trigger={<button className="btn invitebutton" id="popup-2"> Invite Link</button>}>     
            <div className="popc">
              <textarea className="pop" style={{fontSize: '11px', fontWeight: 'bold', padding: '5px'}} value={k} readOnly></textarea>
              <CopyToClipboard aria-hidden="true" text={k} onCopy={() => setCopied(true)}>
                {copied ? <span className="copyText" style={{color: '#c10e21', fontWeight: 'bold'}}><i class="fa fa-clipboard" id="tag"></i></span> : <span className="copyText" style={{color: '#c10e21', fontWeight: 'bold'}}><i class="fa fa-clipboard" id="tag"></i></span>}
              </CopyToClipboard>
            </div>
        </Popup>
    </div>
  );
}

export default ShareLink;