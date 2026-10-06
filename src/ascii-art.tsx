import { useEffect, useRef, useState } from "react"
import { asciiArtSource } from "./lib/configs"

interface AsciiArtProps {
    containerClassName?: string
    containerStyle?: React.CSSProperties
    duration: number
}
export default function AsciiArt({
    containerClassName = "",
    containerStyle = {},
    duration
}: AsciiArtProps) {
    const preRef = useRef<HTMLPreElement>(null)

    const [artInfo, setArtInfo] = useState([0,0])

    useEffect(() => {
        const pre = preRef.current!

        const lines = asciiArtSource.replace(/\r/g, "").split("\n")
        while (lines.length && !lines[0].trim()) lines.shift()
        while (lines.length && !lines[lines.length - 1].trim()) lines.pop()

        const width = Math.max(...lines.map(l => l.length))
        const grid = lines.map(l => l.padEnd(width, " "))
        const center = Math.floor(width / 2)
        const maxRadius = Math.ceil(width / 2)

        setArtInfo([lines.length, width])

        let raf = 0

        while (pre.children.length < lines.length){
            const _pre = document.createElement("pre")
            _pre.className = "flex flex-col items-left text-text-left"
            pre.appendChild(_pre)
        }

        const processLine = (start: number, i: number) => {
            const t = Math.min((performance.now() - start) / duration, 1)
            const r = Math.ceil(maxRadius * t)
            const from = Math.max(center - r, 0)
            const to = center + r

            const _pre = pre.children[i]

            _pre.className = "font-jetbrains"

            _pre.textContent = grid[i].slice(from, to)

          
            if (t < 1) raf = requestAnimationFrame(()=>processLine(start,i))
        }

        for (let i = 0; i < grid.length; i++) {
            setTimeout(()=> processLine(performance.now(), i),duration/10*i)
        }

        return () => cancelAnimationFrame(raf)
    }, [])

    return (
        <div
            className={`[container-type:size] ${containerClassName}`}
            style={{ "--cols": artInfo[1], "--rows": artInfo[0], ...containerStyle } as React.CSSProperties}
        >
            <pre
                ref={preRef}
                className="flex flex-col items-center leading-none"
                style={{
                    fontSize: "min(calc(100cqw / (var(--cols) * 0.6)), calc(100cqh / var(--rows)))",
                    fontFamily: "JetBrains Mono monospace"
                }}
            />
        </div>
    )
}