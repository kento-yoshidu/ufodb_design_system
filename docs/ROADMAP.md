# ufodb-design-system ロードマップ

UFO Studio（Tauri）とUFO Playground（WASM）で同じUIを使うための、共有Reactコンポーネントとデザイントークンのライブラリ。

## 進め方の方針

- **最初は「共有の仕組み」だけを確かめる**: いきなり本物のコンポーネントを移すと、問題が出たときに「コンポーネントの作り」と「別リポジトリのパッケージを読み込む仕組み」のどちらが原因か切り分けにくい。まずテスト用のダミーコンポーネントを1つだけ置き、StudioとPlaygroundの両方で表示できるところまで通す
- **本物のコンポーネントは仕組みが通ってから移す**: 見た目だけの部品（`Header`など）から始め、状態を持つ部分（`Contents`）は最後にする

## Phase 0: プロジェクト初期化

- [x] Vite（library mode）+ React + TypeScriptでプロジェクトを作成し、`toy_ufdb`などと同様に独立したgitリポジトリとして管理する
- [x] `react`/`react-dom`を`peerDependencies`に入れ、ビルド時は`build.rolldownOptions.external`で外す（開発用に`devDependencies`にも入れる）。Vite 8からバンドラーがRolldownになったため、旧名の`rollupOptions`ではなく`rolldownOptions`を使う。JSXの変換先の`react/jsx-runtime`もexternalに含める
- [x] 型定義（`.d.ts`）を出力する。`tsconfig.build.json`（`tsconfig.app.json`を継承し、`emitDeclarationOnly`で型定義だけを`dist/`に出す）を用意し、`vite build`のあとに`tsc -p tsconfig.build.json`を実行する。`vite build`は最初に`dist/`を空にするため、順番を逆にすると型定義が消える
- [x] `package.json`の`exports`で、JS本体・型・`style.css`を利用側から参照できるようにする（例: `import "ufodb-design-system/style.css"`）
- [ ] コンポーネント確認用の開発サーバー（`pnpm dev`）で、ライブラリをビルドせずに表示を確認できるようにする

## Phase 1: ダミーコンポーネントで疎通確認

共有の仕組みで起こりがちな問題を一通り踏めるよう、ダミーコンポーネントには次の要素を意図的に入れる。

- **`useState`を使う**（例: ボタンを押すと数字が増えるカウンター）: 利用側とライブラリでReactが二重に読み込まれるとhooksがエラーになる。hooksを使わない部品では、この問題に気づけない
- **CSS Modulesでスタイルを当てる**: ビルド後の`style.css`を利用側で読み込まないと、スタイルが当たらないことを確認する
- **CSS変数（デザイントークン）を1つ参照する**: `:root`の変数がライブラリ側で定義され、利用側でも効くことを確認する
- **propsを1つ受け取る**（例: 表示するラベル）: 型定義が利用側のエディタで補完されることを確認する

作業:

- [x] ダミーコンポーネントを作り、`src/index.ts`からexportする（`src/dummy/Dummy.tsx`）
- [x] `pnpm build`で`dist/`にJS・`style.css`・型定義が出ることを確認する
- [x] Studioから表示できることを確認する（手順はStudio側`docs/ROADMAP.md`の「UI共通化」）。`pnpm tauri dev`に加え、`pnpm tauri build`でビルドしたアプリをWindowsにインストールし、`useState`・CSS Modules・CSS変数が効くことを確認済み
- [x] Playgroundから表示できることを確認する（手順はPlayground側`docs/ROADMAP.md`の「Phase 1」）。git依存（`github:kento-yoshidu/ufodb_design_system`）で参照し、`pnpm dev`・`pnpm build` + `pnpm preview`の両方で`useState`・CSS Modules・CSS変数・propsの型が効くことを確認済み
- [x] git依存で配布できるようにする（方針は`CLAUDE.md`の「配布方法」）。`dist/`を含むコミットを`main`にマージ済み。利用側がブランチ指定なしで参照すると`main`が使われるため、`develop`で変更しただけでは利用側に届かない
  - [x] `.gitignore`から`dist`を外し、ビルド済みの`dist/`をコミットする
  - [x] `.gitattributes`に`dist/** linguist-generated`を書き、GitHubの差分表示で折りたたまれるようにする
  - [ ] （任意）CIで`pnpm build`を実行し、`git diff --exit-code dist`で`dist/`の更新漏れを検出する
- [ ] 開発中の反映方法を決める: `dist/`を参照する形だと、変更のたびにビルドし直しが要る。`vite build --watch`を動かしておく運用で困らないかを試す
- [ ] 本物のコンポーネントを移し終えたら、ダミーコンポーネントは削除する

## Phase 2: 見た目だけのコンポーネントを移す

`invoke()`もWASMも呼ばず、propsだけで表示が決まる部品から移す。

- [ ] `Header`（Studioの`src/components/Headet.tsx`）: タイトル（`"UFDB GUI APP"`）とロゴ（`/app-icon.svg`）が固定で書かれているので、propsで受け取る形にする。`/app-icon.svg`は利用側アプリの`public/`を前提にしたパスなので、ライブラリ側に置いたままでは表示されない
  - [x] `src/layout/Header/`に移し、`isSidebarOpen`・`onToggleSidebar`をpropsで受け取る形でexportする（`a30a232`）
  - [ ] タイトルとロゴをpropsで受け取る（例: `title`・`logoSrc`）。現状はまだ固定のまま。Playgroundは`base`が`/ufodb_playground/`なので、`/app-icon.svg`のような`/`始まりのパスは`https://kento-yoshidu.github.io/app-icon.svg`を読みにいって404になる。利用側から`import.meta.env.BASE_URL`付きのパスや、importした画像のURLを渡せるようにする
  - [x] `main`にマージして、Studio・Playgroundから`pnpm update ufodb-design-system`で取り込めるようにする（`efca889`。タイトル・ロゴは固定のままマージ）
- [ ] デザイントークンとグローバルなスタイル: Studioの`src/App.css`にある`panel`・`panel__title`・`groups__item`などのグローバルクラスを、トークンと一緒にこのリポジトリへ移すか、各コンポーネントのCSS Modulesに取り込むかを決める
  - **テーマはダーク固定**（ライト/ダークの切り替えはしない）。`prefers-color-scheme`は使わず、`:root`にダークの値を1セットだけ定義する。値はStudioの`src/App.css`の`@media (prefers-color-scheme: dark)`ブロックにあるもの（`--radius`・`--header-height`は色ではないので`:root`のものをそのまま使う）
  - `:root`に`color-scheme: dark;`を指定する。これが無いとスクロールバーや`input`のオートフィル背景などのネイティブ部品が明るいまま残る
  - 変数名は`--bg`・`--surface`のような役割ベースの名前のままにする（`--dark-bg`のようにしない）。将来テーマを増やす場合も値の差し替えで済むようにするため
  - 移すトークン: `--bg`・`--surface`・`--surface-muted`・`--border`・`--text`・`--text-muted`・`--accent`・`--accent-strong`・`--accent-contrast`・`--shadow`・`--radius`・`--header-height`（Studioで定義している12個。すべて使用中）。あわせて、`.groups__item`と`input, button`で直書きしている角丸`8px`を変数にするか`--radius`に揃えるかも決める
  - Studioの`App.css`にある`a:hover`（ダークモード用`@media`の中にだけある）は、Studioに`<a>`要素が無く効いていないので移さない
  - このリポジトリの`src/index.css`（Viteテンプレートの名残）は`--text`・`--bg`・`--border`・`--accent`・`--shadow`を別の値で定義していて、名前が衝突する。`dist/`には入らないが、`pnpm dev`の確認ページで色が違って見える原因になるので、トークンを移すときに削除するか中身を置き換える
  - 起動直後の白いちらつきはCSSだけでは防げないので、利用側で対策する。Studioは`tauri.conf.json`のウィンドウ設定（`backgroundColor`・`theme`）、Playgroundは`index.html`（`<meta name="color-scheme" content="dark">`や`body`へのインラインの背景色）
- [ ] グループ一覧: 現在は`Contents.tsx`の中に直接書かれている。`groups: string[][]`を受け取って表示するだけのコンポーネントとして切り出す
  - [x] `src/layout/Groups/`に`Groups`を作り、`groups: string[][]`をpropsで受け取る形でexportする。Studioの`Contents.tsx`から使っている
  - [ ] 空のときの表示（「まだグループがありません」）をGroupsの中に移す。現在はStudio側の`Contents.tsx`で分岐しているので、Playgroundでも同じ分岐を書くことになる
  - [ ] `groups.module.css`で直書きしている`#888`をトークンに置き換える（下の「グループの色分け」で`--group-color`に置き換わる部分もある）
  - [ ] （任意）`div > div > p`を`ul > li`にする。「グループの一覧」と「グループ内のキーの一覧」なので、リストのほうが意味として素直

## グループの色分け

木（グループ）ごとに色を付けて、見分けやすくする。将来のmode（今の一覧表示の「row」と、`ufodb_v0`のgraphを引いて辺を描く「graph」）のどちらでも、同じグループは同じ色で表示したいので、色の決め方はmodeに依存しない形でこのリポジトリに置く。

### 前提: 並び順で色を決めない

- グループには安定したIDがない（代表元を公開しない方針のため）
- Studioの`groups`コマンドは、グループをサイズの降順に並べて返す。サイズが同じグループ同士の順番は`HashMap`次第で、呼ぶたびに入れ替わることがある
- そのため「配列の何番目か」で色を決めると、insertやmergeのたびに、関係ない木の色まで入れ替わる。**関係ない木の色が変わるのは混乱の元なので避ける**

### 今回やること: 最小キーから色を決める（状態を持たない）

グループ内の最小キーをハッシュして、固定のパレットから色を選ぶ。

- 並び順と関係なく色が決まるので、insertやmergeで関係ない木の色は変わらない
- 状態を持たない純粋関数なので、Studio・Playground、row・graphのどちらでも同じ結果になる
- 割り切る点: mergeでは最小キーを持っていた側の色が残る（小さい木の色が残ることもある）。パレットの色数によっては、別々の木が同じ色になることがある。どちらも後述の「後でやること」で解消する

作業:

- [ ] パレットを定義する（例: `src/styles/groupPalette.ts`）
  - 暗い背景で見分けやすい色を8〜10色。候補: `#f87171`（赤）、`#fb923c`（橙）、`#facc15`（黄）、`#4ade80`（緑）、`#2dd4bf`（青緑）、`#38bdf8`（水色）、`#818cf8`（藍）、`#c084fc`（紫）、`#f472b6`（桃）
  - CSSではなくTSの配列に置く。graph modeでCanvas系のライブラリを使う場合、CSS変数ではなく生の色の値が必要になるため
  - 隣り合う色の色相を離しておく
  - 要素数1の木（孤立したキー）をグレーにするか、ほかと同じく色を付けるかを決める。迷うなら最初は全部に色を付け、見た目で判断する
- [ ] 色を決める関数を作る（例: `src/utils/groupColor.ts`の`groupColor(group: string[]): string`）
  - 関数の中で最小キーを取る。Studioの`groups`は中身をソート済みなので`group[0]`と同じだが、Playgroundなど別の窓口でも同じ結果にするため、関数側で最小値を取る
  - 文字列のハッシュ（文字コードに31を掛けて足していく程度で十分）をパレットの長さで割った余りで色を選ぶ。ハッシュ値が負になると添字も負になるので、符号なしに変換するか絶対値を取る
  - graph modeでも使うので`src/index.ts`からexportする
- [ ] `Groups`で色を当てる
  - 各グループの要素に、`style`でCSS変数`--group-color`を渡す。カスタムプロパティはそのままでは`CSSProperties`の型に入らないので、`as React.CSSProperties`のキャストが必要
  - `groups.module.css`では`var(--group-color)`を使う。枠線はそのまま、背景は`color-mix(in srgb, var(--group-color) 12%, transparent)`のように薄める。色の調整はCSSだけで完結させる
  - `Groups`のpropsは変えない（`groups: string[][]`のまま）ので、Studio・Playgroundの変更は不要
- [ ] `pnpm build`し、Studioの`pnpm tauri dev`で確認する
  - insertしても、ほかの木の色が変わらない
  - サイズが同じ木があるときに`groups`を取り直しても、色がちらつかない
  - mergeでは、最小キーを持っていた側の色が残る（今回はこれで良しとする）

### 後でやること

- [ ] **色の引き継ぎ**: 「キー → 色」を覚えておき、`groups`を取り直すたびに次のルールで割り当てる
  - 前回すでに色が付いていたキーを含む木は、その色を引き継ぐ
  - mergeで色が混ざったら、前回大きかった木の色を残す（同じ大きさなら固定のルールで決める）
  - 全部が新しいキーの木には、今使われていない色を割り当てる（全部使われていたら、使われている数が一番少ない色）
  - 辺の削除で木が分かれる場合（`ufodb_v0`はgraphから辺を消してufを作り直せる）は、大きいほうが色を残し、小さいほうには新しい色を割り当てる
- [ ] **localStorageへの保存**: 再起動やリロードをまたいで色を保つ。保存が無い・読めない初回は、最小キーのハッシュで割り当てる
- [ ] この2つを入れるときは、`groupColor`を`useGroupColors(groups)`のようなhookに置き換える。hookは**modeを切り替える側（Studioの`Contents.tsx`など）**で呼び、各modeには色を渡す。modeを切り替えるたびにコンポーネントが作り直されても、色の記憶が消えないようにするため

## Phase 3: 操作フォームを移す

- [ ] `SidePanel`: 現在は`setKey`などの`Dispatch<SetStateAction<string>>`をpropsで受け取っている。共有コンポーネントとしては、`onChange(value)`のような普通のコールバックの方が利用側で扱いやすい。入力中の値を部品の中で持つか、利用側で持つかも合わせて決める
- [ ] 各操作（`onInsert`/`onMerge`など）はコールバックで受け取り、呼び出し先（`invoke()`かWASMか）は利用側に任せる
- [ ] Studio側ROADMAPのPhase 2で操作（SAME/SIZE/UNMERGE/SEED）が増えるので、フォームの共通の形（入力欄 + ボタン）を部品にするかを検討する

## Phase 4: 画面全体（状態管理）の扱いを決める

- [ ] `CLAUDE.md`の「未決定事項」にある状態管理の置き場所を決める。StudioとPlaygroundの両方で画面を組み立ててみて、重複している部分（操作のたびに`groups`を取り直す、など）がはっきりしてから判断する
  - 各アプリで書く
  - `UfdbBackend`インターフェース（`insert`/`merge`/`groups`など）+ `useUfdb(backend)`のようなhookをこのリポジトリ（または別パッケージ）に置く
- [ ] `Ctrl+B`でのサイドパネル開閉のようなキーボード操作を共有側に置くか決める

## 検討事項（未定）

- **コンポーネントカタログ**: Storybookなどを入れるかは、コンポーネントが増えてから考える。当面は`pnpm dev`の確認用ページで足りる想定
