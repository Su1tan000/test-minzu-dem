type ToolbarElement =
  | string
  | { [key: string]: any } // использование any для динамических ключей
  | (string | { [key: string]: any })[];

interface QuillModules {
  toolbar: ToolbarElement[];
}

export const modules: QuillModules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image'],
    ['clean'],
  ],
};

