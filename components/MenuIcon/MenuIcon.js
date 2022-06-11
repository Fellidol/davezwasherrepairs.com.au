export default function MenuIcon(props) {
  return (
    <>
      <svg
        className={`ham hamRotate ham4 ${props.active ? "active" : ""}`}
        viewBox="0 0 100 100"
        width="100%"
      >
        <path
          className="line top"
          d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
        />
        <path className="line middle" d="m 70,50 h -40" />
        <path
          className="line bottom"
          d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
        />
      </svg>

      <style jsx>{`
        .ham {
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
          transition: transform 400ms;
          -moz-user-select: none;
          -webkit-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        .hamRotate.active {
          transform: rotate(45deg);
        }

        .line {
          fill: none;
          transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
          stroke: #fff;
          stroke-width: 5.5;
          stroke-linecap: round;
        }
        .ham4 .top {
          stroke-dasharray: 40 121;
        }
        .ham4 .bottom {
          stroke-dasharray: 40 121;
        }
        .ham4.active .top {
          stroke-dashoffset: -68px;
        }
        .ham4.active .bottom {
          stroke-dashoffset: -68px;
        }
      `}</style>
    </>
  );
}
