import { useLayoutEffect, useState } from "react";

export const useWindowSize = (): number => {
  const [height, setHeight] = useState(0); // 画面の高さのみを保持する状態

  useLayoutEffect(() => {
    const updateSize = (): void => {
      setHeight(window.innerHeight); // 画面の高さのみを更新
    };

    window.addEventListener("resize", updateSize); // ウィンドウのリサイズイベントに対してリスナーを設定
    updateSize(); // コンポーネントのマウント時に画面の高さを設定

    return () => window.removeEventListener("resize", updateSize); // クリーンアップ関数でリスナーを削除
  }, []);

  return height; // 画面の高さを返す
};
