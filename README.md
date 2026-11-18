# Kova

台灣網站建置工作室的靜態網站。全部是 HTML、CSS 與少量 JavaScript，不需要建置步驟。文案為繁體中文。

正式網址預期為 [https://kovatw.github.io/](https://kovatw.github.io/)。站內連結都是相對路徑，方便整包放到 GitHub Pages 根目錄。

## 本機預覽

在這個資料夾啟動一個靜態伺服器：

```bash
python3 -m http.server 41773
```

然後打開 [http://127.0.0.1:41773](http://127.0.0.1:41773)。

## 檔案

- `index.html`：Kova 主站
- `assets/logo.svg`、`assets/favicon.svg`：標誌（深藍圓、白色 K、青色斜線）
- `demos/`：虛構店家的示範頁（作品集另外連到 kova.tw 底下各自 repo 的虛構店家示範網站）
- `.nojekyll`：讓 GitHub Pages 不要用 Jekyll 處理

作品集只放虛構店家：店名、地址、電話皆為虛構，電話 `0X-0000-0000` 無法撥通。
