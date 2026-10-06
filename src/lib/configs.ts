import type { ISourceOptions } from "@tsparticles/engine";

export const particleConfigs: ISourceOptions[] = [

  // Absorb

  {
    fpsLimit: 120,

    particles: {
      number: {
        value: 300,
      },

      collisions: {
        enable: true,
      },

      color: {
        value: "#f0f0f0",
      },

      shape: {
        type: "square",
      },

      opacity: {
        value: {
          min: 0.1,
          max: 1,
        },
      },

      size: {
        value: {
          min: 0.5,
          max: 4,
        },
      },

      move: {
        enable: true,
        speed: 1.5,
        direction: "top",
        straight: true,
        warp: false,
      },
    },

    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
      },

      modes: {
        push: {
          quantity: 10,
        },
      },
    },

    absorbers: {
      draggable: false,

      size: {
        value: {
          min: 25,
          max: 40,
        },
        limit: 10,
      },

      position: {
        x: 50,
        y: 50,
      },
    },

    background: {
      color: "#000000ff",
    },
  }

  ,
  // Basic
  {
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
        },
      },

      color: {
        value: "#ff0000",
        animation: {
          enable: true,
          speed: 20,
          sync: true,
        },
      },

      shape: {
        type: "circle",
      },

      opacity: {
        value: 0.5,
      },

      size: {
        value: {
          min: 1,
          max: 3,
        },
      },

      links: {
        enable: true,
        distance: 150,
        color: "#f0f0f0",
        opacity: 0.4,
        width: 1,
      },

      move: {
        enable: true,
        speed: 6,
      },
    },

    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },

        onClick: {
          enable: true,
          mode: "push",
        },
      },

      modes: {
        repulse: {
          distance: 100,
        },

        push: {
          quantity: 4,
        },
      },
    },

    background: {
      color: "#0d0d0d",
    },
  },

  // Color Animation
  {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
        },
      },

      color: {
        value: "#ff0000",
        animation: {
          h: {
            enable: true,
            speed: {
              min: 30,
              max: 60,
            },
            sync: true,
          },
          s: {
            enable: true,
            speed: {
              min: 5,
              max: 10,
            },
            sync: true,
          },
          l: {
            enable: true,
            speed: {
              min: 5,
              max: 10,
            },
            sync: true,
          },
        },
      },

      stroke: {
        width: 30,
        color: {
          value: "#0000ff",
          animation: {
            h: {
              enable: true,
              speed: {
                min: 30,
                max: 60,
              },
              sync: true,
            },
            s: {
              enable: true,
              speed: {
                min: 5,
                max: 10,
              },
              sync: true,
            },
            l: {
              enable: true,
              speed: {
                min: 5,
                max: 10,
              },
              sync: true,
            },
          },
        },
      },

      shape: {
        type: "circle",
      },

      opacity: {
        value: 1,
      },

      size: {
        value: 3,
      },

      move: {
        enable: true,
        speed: 6,
      },
    },

    background: {
      color: "#0d0d0d",
    },
  },

  // Effect Trail
  {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
        },
      },

      color: {
        value: "#ff0000",
        animation: {
          enable: true,
          speed: 360,
          sync: true,
        },
      },

      effect: {
        type: "trail",
        options: {
          trail: {
            fade: true,
            length: {
              min: 10,
              max: 30,
            },
          },
        },
      },

      shape: {
        type: "circle",
      },

      size: {
        value: 10,
      },

      move: {
        path: {
          enable: true,
          options: {
            size: 32,
            draw: false,
            increment: 0.004,
          },
          generator: "simplexNoise",
        },

        enable: true,

        speed: {
          min: 6,
          max: 15,
        },
      },
    },

    background: {
      color: "#0d0d0d",
    },
  },

  // Growing
  {
    emitters: {
      direction: "top",

      size: {
        width: 100,
        height: 0,
      },

      position: {
        x: 50,
        y: 100,
      },

      rate: {
        delay: 0.1,
        quantity: 2,
      },
    },

    particles: {
      number: {
        value: 0,
        density: {
          enable: true,
        },
      },

      color: {
        value: "random",
      },

      shape: {
        type: "circle",
      },

      opacity: {
        value: 1,
      },

      size: {
        value: {
          min: 1,
          max: 20,
        },

        animation: {
          enable: true,
          speed: 5,
          sync: true,
          startValue: "min",
          destroy: "max",
          count: 1,
        },
      },

      links: {
        enable: false,
        distance: 150,
        color: "#f0f0f0",
        opacity: 0.4,
        width: 1,
      },

      move: {
        enable: true,
        speed: 5,
        outModes: "destroy",
      },
    },

    background: {
      color: "#0d0d0d",
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
    },
  },

  // Hexagon Path
  {
    particles: {
      color: {
        value: "#FF0000",
        animation: {
          enable: true,
          speed: 10,
        },
      },

      move: {
        direction: "none",
        enable: true,

        outModes: {
          default: "destroy",
        },

        path: {
          clamp: false,
          enable: true,

          delay: {
            value: 0,
          },

          generator: "polygonPathGenerator",

          options: {
            sides: 6,
            turnSteps: 30,
            angle: 30,
          },
        },

        speed: 3,
      },

      number: {
        density: {
          enable: true,
        },
        value: 0,
      },

      opacity: {
        value: 1,
      },

      shape: {
        type: "circle",
      },

      size: {
        value: 2,
      },
    },

    background: {
      color: "#0d0d0d",
    },

    emitters: {
      direction: "none",

      rate: {
        quantity: 1,
        delay: 0.25,
      },

      size: {
        width: 0,
        height: 0,
      },

      position: {
        x: 50,
        y: 50,
      },
    },

    trail: {
      fill: {
        color: "#121212",
      },

      length: 20,
      enable: true,
    },
  },
  // ---------------------------------------------------------------------------
  // Link Triangles
  // ---------------------------------------------------------------------------
  {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
        },
      },

      color: {
        value: "#ff0000",
        animation: {
          enable: true,
          speed: 20,
          sync: true,
        },
      },

      shape: {
        type: "circle",
      },

      opacity: {
        value: 0.5,
      },

      size: {
        value: {
          min: 1,
          max: 3,
        },
      },

      links: {
        enable: true,
        distance: 150,
        color: "random",
        opacity: 0.4,
        width: 1,

        triangles: {
          enable: true,
          color: "#f0f0f0",
          opacity: 0.1,
        },
      },

      move: {
        enable: true,
        speed: 6,
      },
    },

    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },

        onClick: {
          enable: true,
          mode: "push",
        },
      },

      modes: {
        grab: {
          distance: 400,
          links: {
            opacity: 1,
          },
        },

        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 0.8,
        },

        repulse: {
          distance: 200,
        },

        push: {
          quantity: 4,
        },

        remove: {
          quantity: 2,
        },
      },
    },

    background: {
      color: "#0d0d0d",
    },
  },

  // ---------------------------------------------------------------------------
  // Path Grid
  // ---------------------------------------------------------------------------
  {
    particles: {
      color: {
        value: [
          "#FF0000",
          "#FF2A00",
          "#FF5500",
          "#FF8000",
          "#FFAA00",
          "#FFD400",
          "#FFFF00",
          "#D4FF00",
          "#AAFF00",
          "#80FF00",
          "#55FF00",
          "#2AFF00",
          "#00FF00",
          "#00FF2A",
          "#00FF55",
          "#00FF80",
          "#00FFAA",
          "#00FFD4",
          "#00FFFF",
          "#00D4FF",
          "#00AAFF",
          "#0080FF",
          "#0055FF",
          "#002AFF",
          "#0000FF",
          "#2A00FF",
          "#5500FF",
          "#8000FF",
          "#AA00FF",
          "#D400FF",
          "#FF00FF",
          "#FF00D4",
          "#FF00AA",
          "#FF0080",
          "#FF0055",
          "#FF002A",
        ],
      },

      move: {
        enable: true,

        outModes: "out",

        speed: {
          min: 1,
          max: 3,
        },

        path: {
          enable: true,

          options: {
            cellSize: 40,
          },

          generator: "gridPathGenerator",
        },
      },

      number: {
        value: 80,
      },

      opacity: {
        value: 1,
      },

      shape: {
        type: "circle",
      },

      effect: {
        type: "trail",

        options: {
          trail: {
            length: {
              min: 30,
              max: 50,
            },
          },
        },
      },

      size: {
        value: 3,
      },
    },

    background: {
      color: "#0d0d0d",
    },
  },

  // ---------------------------------------------------------------------------
  // Shape Spiral
  // ---------------------------------------------------------------------------
  {
    particles: {
      number: {
        value: 80,

        density: {
          enable: true,
        },
      },

      color: {
        value: "#ff0000",
        animation: {
          enable: true,
          speed: 20,
          sync: true,
        },
      },

      // fill = false
      // stroke = red
      stroke: {
        width: 1,

        color: {
          value: "#ff0000",

          animation: {
            enable: true,
            speed: 20,
            sync: true,
          },
        },
      },

      shape: {
        type: "spiral",

        options: {
          spiral: {
            innerRadius: 0.5,
            lineSpacing: 0.5,
            close: false,
          },
        },
      },

      opacity: {
        value: 0.5,
      },

      size: {
        value: {
          min: 5,
          max: 10,
        },
      },

      links: {
        enable: false,
        distance: 100,
        color: "#f0f0f0",
        opacity: 0.4,
        width: 1,
      },

      rotate: {
        animation: {
          enable: true,
          speed: 20,
          sync: false,
        },
      },

      move: {
        enable: true,
        speed: 6,
      },
    },

    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },

        onClick: {
          enable: true,
          mode: "push",
        },
      },

      modes: {
        grab: {
          distance: 400,

          links: {
            opacity: 1,
          },
        },

        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 0.8,
        },

        repulse: {
          distance: 200,
        },

        push: {
          quantity: 4,
        },

        remove: {
          quantity: 2,
        },
      },
    },

    background: {
      color: "#0d0d0d",
    },
  },
];

export const asciiArtSource = 
`	
    ██╗  ██╗ █████╗  ██████╗
    ██║  ██║██╔══██╗██╔════╝
    ███████║███████║██║
    ██╔══██║██╔══██║██║
    ██║  ██║██║  ██║╚██████╗
    ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝


██████╗  █████╗ ██╗  ██╗ ██████╗
██╔══██╗██╔══██╗██║  ██║██╔═══██╗
██████╔╝███████║███████║██║   ██║
██╔═══╝ ██╔══██║██╔══██║██║   ██║
██║     ██║  ██║██║  ██║╚██████╔╝
╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝

`