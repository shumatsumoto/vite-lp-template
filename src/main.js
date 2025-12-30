// SCSSのインポート
import './sass/style.scss';

// GSAPのScrollTrigger設定
gsap.registerPlugin(ScrollTrigger);

// 基本的なスクロールトリガーの例
gsap.to(".target", {
  scrollTrigger: {
    trigger: ".target",
    start: "top center",
    end: "bottom center",
    markers: true, // デバッグ用マーカー（本番では削除）
    scrub: true, // スクロールに同期
  },
  opacity: 1,
  y: 0,
});
