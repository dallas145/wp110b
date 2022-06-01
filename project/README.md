# 本程式部分參考以下資料:

1. [alert用法](https://clay-atlas.com/blog/2021/12/25/javascript-alert-confirm-prompt-customize-pop-up-window/)

2. [偵測電子郵件用法](https://ithelp.ithome.com.tw/articles/10094951)

3. [下拉選單](https://gitlab.com/ccc110/wp/-/tree/master/11-app/dropdown)

---

# 程式內容:

## 首頁

` unu.html `為首頁

在首頁，你可以看到左上方的` Home `按鈕為綠色。  

按下` Useless Button `按鈕後，按鈕文字將會改變。再次點擊即可恢復原狀。

點擊中間方框內的` Show `按鈕後，方框內出現文字，按鈕文字改變。再次點擊即可恢復原狀。

點擊中間方框下方的五個按鈕` 1 `、` 2 `、` 3 `、` 4 `、` 5 `，按鈕下方將會出現文字。

## Top bar

游標放在上方任一按鈕皆會有顏色變化，放在` Something `按鈕上，則會觸發下拉選單，內有` Cubes:轉動代號 `，` Cubes `，` Games `。

點擊` Cubes:轉動代號 `將會直接開啟[一小時學盲解](https://1hrbld.tw/intermediate-selection-panel/333-cube-notation/)網頁。

點擊` Cubes `將會跳轉至` du.html `頁面。

點擊` Games `將會跳轉至` tri.html `頁面。

點擊` Log in `將會跳轉至` logon.html `頁面。

點擊` About `將會跳轉至` pri.html `頁面。

點擊` Home `將會跳轉至` unu.html `頁面。

Top bar 的按鈕會根據你所在的頁面改變相應的按鈕顏色。

## 內容頁面

### Cubes

` du.html `是內容頁面，因為實在不知道要放些什麼，所以我把平時興趣(魔術方塊)放進去。

整合了魔術方塊的OLL公式和PLL公式，按下` 影片教學 `會開啟相應公式的操作影片。影片來自[Youtube](https://youtube.com/)

### Games

` tri.html `是一個空白頁。佔位置用的。

## Log In

` login.html `是登入頁面，點擊` Submit `按鈕後，會偵測使用者名稱欄位及密碼欄位的字數。若勾選` 記住我 `，會跳出` confirm() `。

若字數符合規定(Username >= 4; Password >= 8)，會跳出` alert() `：系統尚未建置 為您跳轉至首頁，並跳轉至` unu.html `。

點擊` Don't have an account? `會進入註冊頁面(` rigistri.html `)。

點擊` Forget your password? `進入忘記密碼頁面(` gorget.html `)。

### 註冊頁面

按下註冊頁面的` Submit `按鈕後，會使用 JavaScript 偵測所有欄位是否符合規定(Username >= 4; Password >=8; Repeat Password; Email format; CheckBox)。

若不符合將會跳出相應的` alert() `。

若符合，會跳出` alert() `：系統尚未建置 為您跳轉至首頁，並跳轉至` unu.html `。

### 忘記密碼頁面

按下忘記密碼頁面的` Submit `按鈕後，會使用 JavaScript 偵測是否有輸入 email 或 email是否符合格式。

若無輸入或格式不符，會跳出相應的` alert() `。

若輸入成功，會跳出` alert() `：系統尚未建置 為您跳轉至首頁，並跳轉至` unu.html `。

## About 

這個頁面只有魔術方塊公式來源。

在這個頁面詳細寫道: ` 這個網站沒什麼用 ` 。