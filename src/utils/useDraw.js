
export function useIndex(appRef) {
    // * 定时函数
    let timer = 0
    // * 默认缩放值

    const scale = {
        width: '1',
        height: '1',
    }
    // * 设计稿尺寸（px）
    const baseWidth = 1920
    const baseHeight = 1080
    // * 需保持的比例（默认1.77778）
    const baseProportion = parseFloat((baseWidth / baseHeight).toFixed(5))
    const calcRate = () => {
        // 当前宽高比
        const currentRate = parseFloat((window.innerWidth / window.innerHeight).toFixed(5))
        if (appRef) {
            if (currentRate > baseProportion) {
                // 表示更宽
                scale.width = ((window.innerHeight * baseProportion) / baseWidth).toFixed(5)
                scale.height = (window.innerHeight / baseHeight).toFixed(5)
                appRef.style.transform = `scale(${scale.width}, ${scale.height}) translate(-50%, -50%)`
            } else {
                // 表示更高
                scale.height = ((window.innerWidth / baseProportion) / baseHeight).toFixed(5)
                scale.width = (window.innerWidth / baseWidth).toFixed(5)
                appRef.style.transform = `scale(${scale.width}, ${scale.height}) translate(-50%, -50%)`
            }
        }
    }

    const resize = () => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            calcRate()
        }, 200)
    }

    // 改变窗口大小重新绘制
    const windowDraw = () => {
        window.addEventListener('resize', resize)
    }

    return {
        calcRate,
        windowDraw,
    }
}
