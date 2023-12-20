import { useEffect, useRef } from "react"
import { forceGraph } from "@/utils/d3/forceGraph"

const FirstChart = ({ data }) => {
  let svgRef = useRef(null)

  useEffect(() => {
    forceGraph(data, {
      svgEl: svgRef.current,
      nodeId: (d) => d.id,
      nodeGroup: (d) => d.group,
      nodeTitle: (d) => `${d.id}\n${d.group}`,

      nodeStrength: -200,
      linkStrokeWidth: (l) => Math.sqrt(l.value),
      height: 1080,
      width: 1800
    });
  }, [data])


  return (
    <svg ref={svgRef} />
  )
}

export default FirstChart