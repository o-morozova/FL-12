const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];
const rootNode = document.getElementById('root');
let dataStorage = [];



//document.getElementById('root').insertAdjacentHTML('afterbegin',`<p>Hello World!</p>`);
function addFolder(targetElement, textPosition, textToAdd) {
  targetElement.insertAdjacentHTML(textPosition, `<p class="folder">${textToAdd}</p>`);
}

function addFile(targetElement, textPosition, textToAdd) {
  targetElement.insertAdjacentHTML(textPosition, `<p class="file">${textToAdd}</p>`);
}

function isFolder (objectToParse) {
  return objectToParse.folder;
}

function hasChild (objectToParse) {
  return !(objectToParse.children === null || objectToParse.children === false);
}

function fileTree (structureObject) {
  for (let i = 0; i < structureObject.length; i++) {
    isFolder(structure[i]) ?
        addFolder(rootNode,'beforeend', structureObject[i].title) :
        addFile(rootNode,'beforeend', structureObject[i].title);


  }
}
fileTree(structure);
