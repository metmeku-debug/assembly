export default function Words (){

const wordsArray = [
    "apple", "banana", "cherry", "dog", "elephant", 
    "fish", "grape", "house", "ice", "jungle", 
    "kite", "lemon", "mountain", "notebook", "orange", 
    "pencil", "quilt", "river", "sun", "tree", 
    "umbrella", "violin", "water", "xylophone", "yarn", 
    "zebra", "anchor", "beach", "cloud", "daisy", 
    "engine", "forest", "garden", "harbor", "island", 
    "jewel", "kitchen", "lamp", "mirror", "nest", 
    "ocean", "pearl", "quartz", "rainbow", "sand", 
    "tiger", "unicorn", "village", "window", "yard"
  ];
  return wordsArray[Math.floor(Math.random() * wordsArray.length)]
} 