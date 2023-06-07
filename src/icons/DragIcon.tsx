import { type classNameProp } from "src/utils/classNameProp";

export function DragIcon({ className }: classNameProp) {
  return (
    <svg width="24" height="24" viewBox="0 0 512 512" className="hover:cursor-grab">
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        className={className}
        stroke="none"
      >
        <path
          d="M1573 4672 c-164 -59 -276 -202 -290 -373 -21 -254 202 -477 456
-456 132 11 253 82 322 190 55 85 72 150 67 256 -7 159 -92 287 -236 358 -68
34 -83 38 -171 40 -74 3 -108 -1 -148 -15z"
        />
        <path
          d="M3285 4672 c-120 -41 -205 -117 -258 -230 -39 -83 -49 -206 -23 -293
91 -314 491 -411 715 -174 148 156 160 380 31 551 -48 63 -139 127 -214 149
-67 20 -189 19 -251 -3z"
        />
        <path
          d="M1620 2976 c-173 -37 -302 -173 -333 -350 -22 -132 22 -266 120 -365
166 -165 419 -170 588 -10 92 87 135 185 135 309 0 123 -43 222 -133 308 -65
61 -119 89 -206 108 -78 16 -98 16 -171 0z"
        />
        <path
          d="M3336 2979 c-82 -13 -167 -62 -234 -133 -74 -80 -103 -148 -110 -262
-8 -137 33 -238 133 -333 168 -159 422 -155 588 10 243 243 112 655 -227 718
-66 12 -79 12 -150 0z"
        />
        <path
          d="M1599 1266 c-112 -32 -221 -121 -272 -222 -97 -194 -34 -429 146
-545 86 -55 150 -72 258 -67 76 4 97 9 162 41 143 71 228 199 235 358 5 106
-12 171 -67 256 -45 70 -125 135 -203 165 -67 25 -196 33 -259 14z"
        />
        <path
          d="M3300 1265 c-120 -34 -214 -114 -273 -234 -30 -62 -32 -72 -32 -176
0 -103 2 -114 32 -177 44 -93 109 -160 200 -205 65 -32 86 -37 162 -41 108 -5
172 12 258 67 109 70 179 189 190 322 15 173 -87 343 -252 421 -81 38 -198 47
-285 23z"
        />
      </g>
    </svg>
  );
}