useState / useReducer / Contextの使い方と、ローカルステート / グローバルステートの動作の違いを確認するためのプログラムです。

This is a program for checking how the difference is between local state and global state.

## Introduction

Page1で旗の色を編集し、Page2で結果を閲覧します。  
旗は３つのボックスで構成され、左からuseState（ローカルステート）, useReducer（ローカルステート）, Context（グローバルステート）で状態を管理しています。  
Page1からPage2に遷移すると、左側２つは状態を保持できず初期値に戻ってしまいます。

You can change each color of the 3-color flag on Page 1. Then, move Page 2, you can see the flag you created.  
The flag consists of useState, useReducer, and Context from left to right.  
On page 2, the two colors on the left returns to the initial color.

<img width="482" alt="3-color flag" src="https://github.com/m-shiroi/demo-react-state-management/assets/98746670/f2b1d64f-afba-4a7c-892c-bb5cae111bc0">

## Check

`src/page/Page2.jsx` のそれぞれのボックスにも `ev={false}` を追加してみてください。  
Page1からPage2に遷移すると、何が起こるでしょう？

Try to add `ev={false}` to components in `src/page/Page2.jsx`.  
What can you see on Page 2?

## See also

ローカルステートの状態が破棄されるタイミングについて、[React.devのサイト](https://react.dev/learn/preserving-and-resetting-state)で学ぶことができます。

Feel free check out [the official documentation](https://react.dev/learn/preserving-and-resetting-state) to further your knowledge.


