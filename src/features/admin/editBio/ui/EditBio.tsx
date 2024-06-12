import React, { useRef, useState } from 'react';

import ReactQuill from 'react-quill';
import { modules } from '../config';

import { UploadDragger } from './uploadDragger';

import 'react-quill/dist/quill.snow.css';

const EditBioView: React.FC = () => {
  const [text, setText] = useState<string>('');
  const quillRef = useRef<ReactQuill | null>(null);

  const handleChange = (value: string) => {
    setText(value);
  };

  return (
    <div className="flex justify-between items-center gap-5 px-auto m-10 ">
      <ReactQuill
        ref={quillRef}
        className="w-2/3"
        style={{ height: '70vh' }}
        value={text}
        onChange={handleChange}
        modules={modules}
      />
      <UploadDragger />
    </div>
  );
};

export default EditBioView;
