import React, { useRef, useState } from 'react';

export default function CopyExample(val) {

  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess('Copied!');
  };

  return (
    <div>
      {
       /* Logical shortcut for only displaying the 
          button if the copy command exists */
       document.queryCommandSupported('copy') &&
        <div>
          <button onClick={copyToClipboard}>Copy</button> 
          {copySuccess}
        </div>
      }
      <form>
        <textarea
          ref={textAreaRef}
          value={val.code}
        />
      </form>
    </div>
  );
}