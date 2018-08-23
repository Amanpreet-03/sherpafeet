import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';

const icon=css`
-moz-transform: scaleY(-1);
-o-transform: scaleY(-1);
-webkit-transform: scaleY(-1);
transform: scaleY(-1);
filter: FlipH;
-ms-filter: "FlipH";

`

const icons = {

certificate:"M382.188 163.276c26.1035 0.449219 49.5361 -23.6104 48.4023 -49.7832c-1.11426 -25.6191 -25.5166 -46.1475 -50.6006 -44.3174c-0.708984 0.0507812 -1.12402 0.458984 -1.6084 0.785156c-24.5449 -1.08594 -44.5449 18.5059 -44.3389 44.5488 c0.199219 25.4756 22.5527 48.3232 48.1455 48.7666zM379.986 76.0645c21.543 0.0283203 42.6387 14.2646 44.0293 37.4219c1.29199 21.5615 -17.9893 41.7451 -39.3447 42.6006c-51.9531 2.08105 -56.2891 -77.6191 -5.96387 -80.5518 c0.424805 0.19043 0.706055 0.529297 1.2793 0.529297zM507.572 313.529c1.92285 -82.9648 5.3623 -166.136 4.19043 -249.12c-0.0605469 -4.08496 -6.07129 -4.02246 -6.30273 0c-4.46289 77.9893 -4.89355 156.314 -6.30273 234.438 c-26.0137 -2.70801 -52.0352 -5.35254 -78.0557 -7.98828c-8.47559 -0.857422 -25.584 -6.75195 -31.7598 1.67285c-2.7959 3.81641 -1.10156 10.5781 -1.00977 14.6885c0.259766 11.4268 0.329102 22.8408 -0.0664062 34.2686 c-0.760742 21.8838 -2.88281 43.6641 -5.67578 65.374c-0.21875 -0.0410156 -0.364258 -0.173828 -0.604492 -0.179688c-124.334 -4.08594 -248.778 -8.91895 -373.175 -10.4141c0.880859 -0.683594 1.50195 -1.72852 1.51758 -3.17969 c0.03125 -2.8877 0.0214844 -5.78906 0.0507812 -8.68066c0.329102 0.21875 0.620117 0.484375 1.11426 0.516602c14.5557 0.946289 29.4004 0.69043 43.9688 0.117188c3.11035 -0.124023 3.10742 -4.70703 0 -4.83008 c-14.5713 -0.573242 -29.4131 -0.830078 -43.9688 0.117188c-0.487305 0.03125 -0.766602 0.293945 -1.09277 0.506836c0.177734 -19.665 0.317383 -39.3418 0.342773 -59.0566c0.24707 0.132812 0.411133 0.354492 0.737305 0.385742 c14.6729 1.37793 29.3115 2.61328 44.0293 3.41797c2.76465 0.148438 2.66309 -3.97461 0 -4.24121c-14.6641 -1.47559 -29.3184 -2.51465 -44.0293 -3.41699c-0.335938 -0.0185547 -0.49707 0.177734 -0.75 0.272461 c0.0126953 -22.5469 -0.0605469 -45.1055 -0.231445 -67.6709c0.262695 0.224609 0.512695 0.47168 0.921875 0.522461c15.293 1.93164 30.7676 2.77148 46.1279 1.18164c2.10352 -0.21875 2.19824 -3.41797 0 -3.35742 c-15.4805 0.417969 -30.7266 0.376953 -46.1279 -1.47559c-0.417969 -0.0507812 -0.674805 0.132812 -0.941406 0.293945c-0.0878906 -10.8184 -0.0625 -21.6309 -0.205078 -32.4502c45.7549 0.371094 91.5635 1.34961 137.314 0.374023 c3.33887 -0.0693359 3.33496 -5.11133 0 -5.18164c-45.7676 -0.974609 -91.585 0.00683594 -137.359 0.374023c-0.148438 -10.5332 -0.0888672 -21.0674 -0.316406 -31.5977c24.9189 0.823242 49.957 0.924805 74.8662 0.461914 c2.88574 -0.0537109 2.87891 -4.4209 0 -4.47461c-24.9375 -0.462891 -49.998 -0.361328 -74.9424 0.461914c-0.224609 -9.94434 -0.361328 -19.8984 -0.667969 -29.8369c0.0976562 0.0126953 0.132812 0.101562 0.240234 0.101562 c43.3105 -0.0820312 86.791 -1.03613 129.803 -6.3916c2.41016 -0.300781 2.5625 -3.9873 0 -3.88574c-43.2939 1.71387 -86.4863 5.06152 -129.803 6.45117c-0.151367 0.00683594 -0.211914 0.126953 -0.344727 0.158203 c-0.256836 -7.94629 -0.374023 -15.9014 -0.694336 -23.8379c17.8086 -0.396484 35.6016 -0.741211 53.3818 -1.99902c2.20703 -0.155273 2.25781 -3.47754 0 -3.47363c-17.8691 0.015625 -35.6836 0.946289 -53.5205 1.82715 c-0.376953 -9.03223 -0.554688 -18.084 -1.02637 -27.1006c30.7363 0.632812 61.498 0.310547 92.2314 -0.231445c2.54004 -0.0439453 2.54004 -3.91797 0 -3.94629c-30.8027 -0.341797 -61.6279 -0.46582 -92.4277 0.374023 c-0.27832 -5.1875 -0.494141 -10.3789 -0.810547 -15.5605c0.357422 0.0957031 0.696289 0.21582 1.12402 0.212891c110.18 -1.11523 221.73 0.259766 331.739 -5.40039c-42.1631 35.1797 -27.459 132.556 49.8721 124.609 c35.4775 -3.64551 65.5234 -37.416 63.6865 -73.3408c-0.943359 -18.4893 -9.63672 -34.248 -22.3438 -45.9062c23.9531 -2.99316 47.2754 -1.92285 71.2754 -2.02051c3.66797 -0.0126953 4.63672 -5.82812 0.883789 -6.53418 c-23.9023 -4.50293 -49.4258 -1.65332 -73.0137 3.36328c-1.39062 0.294922 -1.92285 1.59668 -1.81836 2.82227c-0.323242 -0.269531 -0.617188 -0.570312 -0.943359 -0.835938c15.5469 -20.7637 32.7979 -42.9678 42.7393 -66.6865 c0.402344 -0.96582 -0.00976562 -1.81445 -0.639648 -2.50781c0.4375 -0.348633 0.931641 -0.643555 1.3623 -1.00098c2.48926 -2.07812 -0.174805 -6.63867 -3.20898 -5.51074c-10.9893 4.0791 -21.2695 10.999 -31.3984 17.1523 c-2.75488 -5.33008 -5.50098 -10.6631 -8.34473 -15.9453c-2.99316 -5.56152 -5.60254 -13.0391 -10.4326 -17.0078c1.58984 1.30859 4.08203 -0.332031 2.95801 -2.2832c-1.30469 -2.26758 -3.10645 -2.59082 -5.56152 -1.78027 c-0.838867 0.275391 -1.64355 0.944336 -1.91602 1.83105c-0.598633 0.164062 -1.14648 0.563477 -1.52344 1.27246c-10.4199 19.5986 -17.6787 41.6797 -25.083 63.0947c-2.08691 -20.9121 -5.33984 -41.7861 -8.64258 -62.4863 c-0.488281 -3.05957 -3.61133 -3.23047 -5.56152 -1.72266c-1.48926 -0.756836 -3.49707 -0.674805 -4.72559 1.05176c-4.62695 6.49219 -12.415 23.9678 -21.7734 21.4346c-3.62988 -0.985352 -8.19043 -5.50098 -11.335 -7.61426 c-3.81934 -2.56445 -7.47754 -5.11719 -11.665 -7.0459c-0.535156 -0.24707 -1.06055 -0.225586 -1.53223 -0.0732422c-0.0791016 -0.148438 -0.129883 -0.320312 -0.208984 -0.46582c-1.69434 -3.17676 -5.99219 -0.823242 -5.43457 2.29004 c4.69629 26.2422 16.6523 52.748 25.5322 78.1348c-0.0341797 -0.00292969 -0.0410156 -0.03125 -0.0761719 -0.0341797c-109.647 -8.08301 -223.117 -4.46582 -332.879 1.20312c-0.794922 0.0410156 -1.4248 0.310547 -1.97266 0.65918 c-1.18848 -2.03711 -4.66504 -1.80566 -4.71582 1.09863c-1.94824 110.157 1.31055 220.556 1.17188 330.748c0 1.37402 0.525391 2.40039 1.31738 3.08789c-3.75293 -0.015625 -3.69629 5.6377 0.0185547 5.82422c126.164 6.31543 252.594 9.1084 378.859 12.6934 c1.0293 0.0283203 1.79199 -0.319336 2.41016 -0.810547c1.00391 0.880859 2.50195 1.17773 3.74023 -0.0605469c35.1738 -35.1953 73.207 -66.4424 112.378 -96.9727c2.46973 1.77637 6.96387 0.697266 7.05566 -3.31543zM370.485 -20.5859 c3.24902 22.252 6.64453 44.6367 11.6045 66.5791c-0.228516 0.642578 -0.450195 1.31055 -0.681641 1.9541c-1.55762 0.271484 -2.54883 1.34277 -2.7168 2.74512c-13.0293 -0.775391 -24.0449 2.12891 -33.0674 7.51562 c-6.0752 -23.7686 -11.9404 -49.9922 -22.4014 -72.3926c4.1084 3.53125 8.53223 6.72656 12.8682 9.9502c3.93652 2.92676 8.70605 7.76562 14.166 6.9873c3.5 -0.498047 5.3623 -3 7.44336 -5.58984c4.54395 -5.66602 8.62305 -11.7695 12.7852 -17.749zM459.636 2.4707 c-13.5771 18.7139 -24.707 39.9941 -36.6592 59.8262c-10.5781 -7.52539 -23.0947 -12.5166 -36.2471 -14.1064c-0.0126953 -0.186523 -0.0380859 -0.370117 -0.0507812 -0.556641c10.084 -21.293 21.0137 -43.9404 27.2207 -66.5596 c1.00098 2.10938 2.17285 4.18652 3.19922 6.30176c4.38574 9.04883 8.8457 18.0527 13.3809 27.0283c0.984375 1.95117 3.69238 2.4668 5.48828 1.4375c7.68359 -4.4082 15.9658 -8.56934 23.668 -13.3711zM321.617 121.351 c-1.56738 -36.2227 24.5674 -61.5205 58.3379 -66.499c0.731445 0.844727 2.0459 1.07031 2.8916 0.293945c15.3887 0.868164 27.9268 6.57812 37.6875 14.8945c0.0351562 0.0224609 0.0507812 0.0605469 0.0888672 0.0791016 c35.4277 30.2998 31.8545 97.0176 -25.5771 109.033c-39.8135 8.33008 -71.6865 -17.5137 -73.4287 -57.8018zM444.101 302.102c18.3027 1.91992 36.6055 3.80762 54.9141 5.67285c-0.00292969 0.164062 -0.00585938 0.329102 -0.00878906 0.494141 c-40.7129 27.9521 -77.3408 61.6787 -111.117 97.6025c6.30566 -31.1289 9.36816 -62.5625 9.09863 -94.3721c-0.00585938 -4.28516 -0.0947266 -8.56738 -0.259766 -12.8486c6.62207 -0.753906 13.2168 -0.567383 19.7783 0.560547 c9.20703 0.626953 18.4199 1.92871 27.5947 2.89062zM99.4307 286.432c2.84375 -0.0917969 2.84082 -4.32617 0 -4.41504c-27.8994 -0.893555 -55.8457 -0.0986328 -83.7471 0.293945c-2.46777 0.0322266 -2.46094 3.79102 0 3.82617 c27.9014 0.392578 55.8477 1.1875 83.7471 0.294922zM122.458 358.264c3.7627 -0.214844 3.81348 -5.85547 0 -5.89062c-36.2939 -0.313477 -72.5957 -1.08301 -108.878 -1.38672c-3.25586 -0.0253906 -3.08789 4.61133 0 4.94629 c35.8262 3.87695 72.9189 4.37402 108.878 2.33105z",
degree:"M496.991 164.559c32.3467 -40.4307 12.1709 -166.896 -58.2305 -146.241c-0.333008 0.0966797 -0.479492 0.375 -0.713867 0.574219c-1.19629 -0.75 -2.75391 -0.844727 -4.03809 0.473633c-55.4609 56.9512 -118.894 103.763 -188.517 141.729 c-14.5215 -53.6533 -43.7461 -100.263 -85.9688 -136.614c-1.65625 -1.42676 -5.00488 -0.644531 -4.7666 1.97363c0.413086 4.52344 4.94238 21.542 2.37598 25.7793c-4.8584 8.03027 -13.124 4.38281 -21.1699 3.82227 c-1.05371 -0.0751953 -1.60449 0.825195 -1.63184 1.72363c-0.1875 -0.0751953 -0.367188 -0.169922 -0.556641 -0.245117c-2.45898 -0.970703 -3.91406 2.91504 -1.75293 4.1582c4.22168 2.43164 8.14941 5.02441 12.0879 7.6123 c0.121094 0.183594 0.324219 0.266602 0.552734 0.34668c32.2559 21.3311 54.9326 48.2168 68.2188 83.6758c-0.00585938 0.371094 0.131836 0.722656 0.394531 0.990234c2.3877 6.48926 4.56836 13.1699 6.32324 20.2568 c-70.7148 35.1494 -144.869 58.0273 -218.566 86.0928c-1.3916 0.529297 -1.27148 2.19531 -0.262695 2.7373c2.33496 48.6787 45.2461 101.461 95.9297 104.54c1.0459 0.0654297 1.44824 -0.69043 1.39453 -1.47656 c0.0224609 -0.0625 0.0888672 -0.0771484 0.102539 -0.145508c15.374 -75.5498 105.507 -127.151 171.671 -152.79c70.9482 -27.4932 147.138 -37.1123 222.172 -46.2715c1.53223 -0.1875 2.46875 -1.19629 2.87598 -2.37109 c0.676758 0.357422 1.47559 0.418945 2.07617 -0.331055zM180.293 209.672c-1.60254 0.150391 -1.6377 2.64258 0.00195312 2.53613c0.179688 -0.0117188 0.359375 -0.0214844 0.539062 -0.0332031c2.3916 11.4365 9.83203 22.2324 19.2637 28.5234 c-48.3242 28.5801 -100.097 71.6074 -104.68 123.577c-7.60645 -3.05664 -14.9561 -6.01172 -22.0352 -9.2832c7.03613 -0.685547 14.0674 -1.35059 21.042 -2.52832c1.1709 -0.199219 0.880859 -2.12402 -0.27832 -2.05469 c-8.22363 0.485352 -16.3701 1.68164 -24.543 2.71777c-6.3291 -3.09473 -12.4629 -6.46191 -18.2695 -10.5879c11.6777 -0.298828 23.3496 -0.560547 35.0078 -1.35645c1.6123 -0.110352 1.64355 -2.53418 0 -2.53223 c-12.627 0.00976562 -25.2207 0.635742 -37.8359 1.17676c-0.207031 0.00976562 -0.307617 0.147461 -0.467773 0.220703c-3.75684 -2.90723 -7.41797 -6.0625 -10.9111 -9.73145c-2.7793 -2.91699 -5.27539 -5.93262 -7.59082 -9.01562 c13.7168 0.106445 27.4287 0.302734 41.1494 0.136719c1.39453 -0.0175781 1.39258 -2.14941 0 -2.16504c-14.1484 -0.169922 -28.2871 0.0410156 -42.4336 0.145508c-5.68457 -7.94141 -10.1094 -16.3584 -13.5586 -25.251 c13.4473 0.974609 26.876 1.13672 40.3301 -0.0341797c1.58203 -0.135742 1.6123 -2.59668 0 -2.49414c-13.7188 0.879883 -27.4053 1.15625 -41.1338 0.483398c-1.86914 -5.04883 -3.48926 -10.2275 -4.9043 -15.542c19.1953 -2.53613 38.4492 -3.99609 57.7861 -4.95605 c1.05566 -0.0527344 1.06543 -1.67676 0 -1.65137c-19.501 0.467773 -38.8457 2.46484 -58.127 5.33203c-1.07617 -4.14844 -2.08398 -8.34375 -2.98047 -12.6426c11.5 -2.54395 23.0273 -5.43652 34.5576 -8.51758c13.5693 0.708984 26.71 -0.78125 39.7646 -4.9043 c1.07812 -0.339844 0.624023 -2.01855 -0.467773 -1.69727c-10.8838 3.21289 -21.9316 4.87109 -33.1494 4.97559c44.9414 -12.3682 89.8955 -28.6758 133.58 -48.5361c-0.0371094 1.89453 0.107422 3.79492 0.373047 5.6875 c-0.00976562 0 -0.0195312 0.00195312 -0.0292969 0.00195312zM202.067 79.4111c17.8291 25.7139 30.2393 54.3838 38.2275 84.54c-1.96094 1.05371 -3.87207 2.17676 -5.84375 3.21484c-3.9541 2.08398 -7.96875 3.96094 -11.9473 5.95996 c-0.894531 -6.13574 -2.25977 -12.2305 -4.01855 -18.2461c3.36133 0.132812 6.73047 0.258789 10.0693 0.104492c2.10352 -0.0966797 2.09961 -3.16895 0 -3.26562c-3.66309 -0.169922 -7.36328 -0.00390625 -11.0479 0.137695 c-1.49023 -4.71875 -3.16016 -9.39746 -5.11523 -13.9844c3.66016 0.116211 7.33496 0.220703 10.9453 -0.0712891c1.81934 -0.147461 1.81543 -2.67969 0 -2.82617c-4.02832 -0.325195 -8.13574 -0.161133 -12.2129 -0.0371094 c-1.59863 -3.54688 -3.28809 -7.05957 -5.15137 -10.4932c3.59863 0.617188 7.20605 1.16992 10.8389 1.27246c1.20605 0.0351562 1.43945 -1.80371 0.282227 -2.08984c-4.13184 -1.02441 -8.39941 -1.45703 -12.6562 -1.86914 c-2.1748 -3.82715 -4.45996 -7.59668 -6.94238 -11.2373c2.96191 0 5.92188 -0.0400391 8.87891 -0.245117c1.65332 -0.114258 1.64941 -2.45312 0 -2.56738c-3.66309 -0.25293 -7.33398 -0.256836 -11.0049 -0.236328 c-2.73535 -3.81738 -5.5752 -7.55566 -8.63281 -11.1074c4.38379 0.729492 8.78711 1.45801 13.1758 1.70312c1.48633 0.0830078 1.80762 -2.31348 0.351562 -2.5957c-5.16504 -1.00391 -10.5137 -1.34961 -15.7891 -1.81543 c-3.02539 -3.35742 -6.17676 -6.5918 -9.48047 -9.65039c4.80566 0.108398 9.60938 0.255859 14.4189 0.214844c1.68555 -0.0136719 1.66699 -2.53223 0 -2.60547c-5.8418 -0.253906 -11.6855 -0.290039 -17.5312 -0.348633 c-4.84473 -4.2373 -9.92285 -8.18066 -15.2676 -11.6895c7.91211 -0.138672 15.8379 -0.341797 23.667 -1.2373c1.33594 -0.152344 1.39746 -2.07031 0 -2.12793c-9.26953 -0.376953 -18.6045 0.207031 -27.8965 0.740234 c-4.1582 -2.5127 -8.41309 -4.85352 -12.8203 -6.86621c6.76172 1.13867 13.5273 2.18262 20.3125 3.2207c1.50977 0.231445 3.39648 -0.643555 3.25586 -2.48047c-0.158203 -2.07812 -0.454102 -4.23926 -0.779297 -6.38672 c2.55762 -0.317383 5.11914 -0.613281 7.66113 -1.02441c0.856445 -0.137695 0.647461 -1.62402 -0.205078 -1.51367c-2.56348 0.332031 -5.10938 0.779297 -7.65723 1.2041c-0.503906 -3.15137 -1.05176 -6.21875 -1.40137 -8.84375 c2.60938 0.904297 5.31836 1.27539 8.0752 0.542969c1.23047 -0.326172 0.989258 -2.29688 -0.301758 -2.23438c-2.85938 0.138672 -5.37988 0.0283203 -8.05176 -0.84668c-0.479492 -6.33105 1.36133 -8.3457 11.2256 1.44727 c11.1943 11.1143 21.3799 23.2734 30.3691 36.2402zM242.987 172.086c-0.15625 7.12207 3.65137 15.1387 7.34375 20.6533c4.53516 6.75781 10.665 11.6299 18.0498 14.7744c-9.91309 3.83789 -19.7178 8.01465 -29.3896 12.5811 c-10.8037 5.10156 -22.7656 11.2588 -35.0332 18.3506c-0.994141 -0.834961 -1.90039 -1.69336 -2.79297 -2.55469c3.23145 0.0361328 6.43262 -0.382812 9.52441 -1.47363c1.78809 -0.631836 1.08398 -3.34961 -0.789062 -2.86621 c-3.90527 1.01074 -7.69922 1.47656 -11.6934 1.22559c-2.10352 -2.41113 -3.90723 -4.91211 -5.41309 -7.52637c6.34863 -0.206055 12.9463 -0.0947266 19.1377 -1.26562c1.44238 -0.274414 0.970703 -2.33105 -0.328125 -2.41504 c-6.57617 -0.43457 -13.4541 0.636719 -20.0469 1.17188c-1.72168 -3.47168 -3.14062 -7.0791 -4.06836 -10.9893c8.49023 -0.514648 16.9932 -1.00781 25.416 -2.08789c1.70117 -0.21875 1.81738 -2.81641 0 -2.75293c-8.66602 0.297852 -17.3184 1.21582 -25.958 2.0957 c-0.483398 -2.51367 -0.888672 -5.0918 -1.14453 -7.80859c1.88672 -0.875 3.72949 -1.84766 5.61035 -2.73535c0.144531 0.137695 0.339844 0.230469 0.614258 0.203125c7.84082 -0.774414 15.6855 -1.48633 23.499 -2.52246c1.0459 -0.138672 1.10254 -1.77246 0 -1.6875 c-6.70215 0.519531 -13.3789 1.2793 -20.0576 2.03125c16.043 -7.69922 31.9082 -15.8164 47.5195 -24.4014zM433.324 29.8193c-10.042 44.7324 4.75391 113.756 50.7422 131.797c-71.9727 8.98926 -145.008 19.0586 -212.97 44.8965 c-0.0849609 -0.162109 -0.143555 -0.339844 -0.313477 -0.450195c-6.68066 -4.37109 -12.4355 -9.99219 -16.5879 -16.8359c-3.85449 -6.35547 -4.36523 -12.959 -6.64941 -19.6055c69.0674 -38.501 132.943 -85.7002 185.778 -139.802zM445.457 22.9258 c61.585 -0.189453 71.4082 92.6768 50.0303 136.166c-0.339844 -0.305664 -0.686523 -0.611328 -1.24121 -0.753906c-52.5918 -13.4424 -64.4883 -89.543 -55.4834 -133.972c0.0400391 -0.0410156 0.0810547 -0.0810547 0.121094 -0.12207 c0.311523 -0.328125 0.493164 -0.680664 0.650391 -1.03223c0.693359 -0.0673828 1.34473 -0.0556641 2.02539 -0.0986328c-1.16211 24.8789 3.79492 49.252 14.6777 71.7471c5.82324 12.0361 18.0615 40.624 35.1865 34.6914 c1.49805 -0.519531 1.77441 -2.37012 0.996094 -3.41016c8.8916 -16.0615 5.88379 -35.0195 -0.955078 -51.5127c-4.9834 -12.0205 -11.7383 -30.0596 -26.7871 -30.8467c-1.6123 -0.0849609 -2.36816 1.20605 -2.34668 2.50879 c-0.0605469 0.0810547 -0.169922 0.0947266 -0.212891 0.195312c-6.75781 15.2559 -2.23633 42.3174 13.5801 50.8623c1.65625 0.896484 3.52637 -0.911133 2.58496 -2.58496c-4.30176 -7.64551 -9.94434 -13.3379 -12.3623 -22.1279 c-2.18457 -7.94336 -1.76367 -15.4941 -0.90918 -23.458c12.873 4.59668 20.5068 25.1826 24.0732 36.7168c4.17578 13.499 3.76172 26.0664 0.46582 39.416c-17.583 -0.791992 -31.5039 -38.5186 -35.8818 -51.3564c-5.61621 -16.4756 -7.74219 -33.7002 -8.21191 -51.0283 z", 
degreecap:"M507.974 279.323c2.29102 -0.648438 3.91016 -2.69043 4.02441 -5.06934c0.109375 -2.37891 -1.31543 -4.56152 -3.53711 -5.41797l-80.1699 -30.916v-109.464c8.73633 -2.42871 15.1748 -10.4355 15.1748 -19.9346c0 -6.7334 -3.24414 -12.707 -8.23438 -16.4912 c3.80469 -16.8027 8.67773 -33.5732 14.5244 -49.8887c0.571289 -1.59375 0.381836 -3.36133 -0.515625 -4.79785s-2.40234 -2.38184 -4.08594 -2.56836c-7.43066 -0.820312 -14.9141 -1.23047 -22.3975 -1.23047c-7.48242 0 -14.9658 0.40918 -22.3975 1.23047 c-1.68262 0.186523 -3.18848 1.13379 -4.08496 2.56836c-0.896484 1.43555 -1.08691 3.2041 -0.515625 4.79785c3.6748 10.2549 6.96191 20.6924 9.84766 31.2021c0.0566406 0.725586 0.24707 1.40723 0.555664 2.02637c1.49121 5.53906 2.86133 11.0977 4.12109 16.6602 c-4.99121 3.78418 -8.23438 9.75879 -8.23438 16.4912c0 9.5 6.43848 17.5059 15.1748 19.9346v105.196l-26.9053 -10.376l4.375 -34.6426c1.02832 -8.07129 -2.98047 -15.9648 -10.2227 -20.1357c-23.0303 -14.2842 -95.6963 -49.2793 -117.5 -54.4961 c-3.1084 -0.869141 -6.30273 -1.30566 -9.49609 -1.30566c-3.19531 0 -6.3877 0.436523 -9.49414 1.30566c-21.8135 5.22363 -94.4736 40.2178 -117.494 54.4971c-7.23828 4.1709 -11.248 12.0625 -10.2207 20.1377l4.23145 33.5566l-120.953 46.6426 c-2.22266 0.856445 -3.64648 3.03906 -3.53711 5.41797s1.72852 4.4209 4.01953 5.06934l250.466 70.9209c0.986328 0.27832 2.0293 0.27832 3.01562 0zM408.521 45.1367c9.4668 -0.699219 18.9951 -0.699219 28.4639 0c-2.5 7.34961 -4.80273 14.7773 -6.91113 22.2471 h-14.6416c-2.1084 -7.46875 -4.41113 -14.8975 -6.91113 -22.2471zM427.108 78.4502c-0.802734 3.15332 -1.56836 6.31055 -2.29785 9.46875c-0.676758 -0.0664062 -1.36133 -0.104492 -2.05664 -0.104492s-1.38086 0.0371094 -2.05859 0.104492 c-0.728516 -3.1582 -1.49414 -6.31543 -2.2959 -9.46875h8.70898zM432.396 108.523c0 5.31641 -4.32422 9.64062 -9.64062 9.64062s-9.64258 -4.32422 -9.64258 -9.64062s4.32617 -9.64258 9.64258 -9.64258s9.64062 4.32617 9.64062 9.64258zM380.217 214.917 l-0.53418 4.25977l-121.689 -46.9277c-0.640625 -0.24707 -1.31543 -0.370117 -1.99023 -0.370117s-1.35059 0.123047 -1.99121 0.370117l-118.876 45.8428l-0.537109 -4.26074l44.9082 -17.3184c2.85156 -1.10059 4.27246 -4.30273 3.17188 -7.15332 c-0.84668 -2.19824 -2.94238 -3.54492 -5.16309 -3.54492c-0.662109 0 -1.33594 0.119141 -1.99023 0.37207l-42.3545 16.334l-0.763672 -6.05371l20.2676 -7.81641c2.85059 -1.09961 4.27148 -4.30273 3.1709 -7.15332 c-0.845703 -2.19629 -2.94238 -3.54395 -5.16309 -3.54395c-0.662109 0 -1.33594 0.119141 -1.99023 0.371094l-17.4238 6.71973c0.363281 -2.84277 2.08887 -5.44727 4.79102 -6.98633c0.0615234 -0.0351562 0.123047 -0.0703125 0.182617 -0.108398 c24.002 -14.9141 95.2627 -48.6816 114.402 -53.207c0.0791016 -0.0185547 0.15918 -0.0400391 0.238281 -0.0615234c4.31055 -1.22559 8.86914 -1.22461 13.1836 0c0.0791016 0.0214844 0.15918 0.0429688 0.238281 0.0615234 c19.1299 4.51953 90.3965 38.2891 114.408 53.2061c0.0605469 0.0380859 0.12207 0.0742188 0.183594 0.109375c3.07129 1.74805 4.8916 4.87109 4.86621 8.1543l-20.4541 -7.8877c-0.654297 -0.251953 -1.32812 -0.371094 -1.99023 -0.371094 c-2.2207 0 -4.31641 1.34766 -5.16309 3.54395c-1.10059 2.85059 0.319336 6.05371 3.1709 7.15332l23.084 8.90234l-0.764648 6.05273l-45.1689 -17.418c-0.654297 -0.25293 -1.32812 -0.37207 -1.98926 -0.37207c-2.22168 0 -4.31641 1.34766 -5.16406 3.54492 c-1.09961 2.85059 0.320312 6.05273 3.17188 7.15332zM418.552 246.028l70.4482 27.167l-233.001 65.9746l-233 -65.9746l233.002 -89.8516l143.477 55.3281l-144.596 29.9053c-2.99219 0.618164 -4.91699 3.54688 -4.29785 6.53906 c0.618164 2.99219 3.55078 4.91699 6.53906 4.29785z",
speaking:"M141.995 21.7969c48.7617 0 92.1016 -29.2188 110.414 -74.4375c1.71094 -4.22754 -0.328125 -9.04199 -4.55469 -10.7539c-1.01562 -0.410156 -2.06445 -0.605469 -3.09766 -0.605469c-3.26465 0 -6.35645 1.94922 -7.65625 5.16113 c-15.7734 38.9512 -53.1035 64.1191 -95.1045 64.1191c-42 0 -79.3311 -25.168 -95.1035 -64.1191c-1.71191 -4.22852 -6.52539 -6.26758 -10.7539 -4.55566s-6.26758 6.52734 -4.55566 10.7539c18.3105 45.2188 61.6504 74.4375 110.412 74.4375zM431.849 409.636 c31.71 -25.1836 49.1738 -58.8369 49.1738 -94.7607c0 -31.8936 -14.1914 -62.7266 -39.96 -86.8184c-23.6455 -22.1074 -55.7715 -37.3916 -91.0186 -43.4062c-8.0127 -39.4766 -42.8057 -68.5244 -83.3467 -68.5244c-3.33203 0 -6.33887 2.00391 -7.62207 5.08105 c-1.28223 3.07617 -0.589844 6.62305 1.75488 8.99023c14.2275 14.3613 21.4473 34.3818 19.8916 54.5029c-76.1074 13.0352 -130.666 66.9473 -130.666 130.175c0 35.9238 17.4619 69.5771 49.1709 94.7607c31.1504 24.7393 72.457 38.3643 116.312 38.3643 c43.8525 0 85.1592 -13.625 116.31 -38.3643zM341.521 200.046c71.2627 9.83789 122.986 58.1309 122.986 114.829c0 64.2979 -66.8262 116.609 -148.968 116.609c-82.1406 0 -148.967 -52.3115 -148.968 -116.608c0 -56.6885 51.709 -104.98 122.955 -114.827 c4.30078 -0.594727 7.40723 -4.41602 7.1084 -8.74707c-0.00195312 -0.0390625 -0.00488281 -0.078125 -0.00878906 -0.117188c2.70703 -19.5137 -1.375 -39.2559 -11.1855 -55.8955c25.1738 7.2627 44.7881 28.7832 48.9854 55.8203 c-0.00488281 0.0625 -0.0107422 0.126953 -0.015625 0.189453c-0.296875 4.33105 2.81055 8.15332 7.11035 8.74707zM260.116 323.684c4.85645 0 8.80859 -3.95215 8.80859 -8.80859s-3.95215 -8.80859 -8.80859 -8.80859c-4.85742 0 -8.80859 3.95215 -8.80859 8.80859 s3.95117 8.80859 8.80859 8.80859zM370.963 323.684c4.85645 0 8.80859 -3.95215 8.80859 -8.80859s-3.95215 -8.80859 -8.80859 -8.80859c-4.85742 0 -8.80859 3.95215 -8.80859 8.80859s3.95117 8.80859 8.80859 8.80859zM315.539 323.684 c4.85742 0 8.80859 -3.95215 8.80859 -8.80859s-3.95117 -8.80859 -8.80859 -8.80859c-4.85645 0 -8.80859 3.95215 -8.80859 8.80859s3.95215 8.80859 8.80859 8.80859zM141.995 46.8477c-42.7549 0 -77.5361 34.7842 -77.5361 77.5381 c0 42.7529 34.7822 77.5361 77.5361 77.5361s77.5361 -34.7822 77.5361 -77.5361c0 -42.7549 -34.7812 -77.5381 -77.5361 -77.5381zM141.995 185.405c-33.6475 0 -61.0205 -27.3721 -61.0205 -61.0195s27.374 -61.0215 61.0205 -61.0215s61.0205 27.375 61.0205 61.0215 s-27.373 61.0195 -61.0205 61.0195z",
firstaid:"M449.279 349.565c34.5859 0 62.7227 -28.1367 62.7197 -62.7227v-227.269c0 -32.5244 -24.8828 -59.3389 -56.6123 -62.4209c0.113281 -0.708984 0.1875 -1.43066 0.1875 -2.1709v-10.5498c0 -7.69336 -6.25977 -13.9531 -13.9531 -13.9531h-85.9463 c-7.69336 0 -13.9541 6.25977 -13.9541 13.9531v10.5498c0 0.634766 0.0585938 1.25781 0.140625 1.87012h-172.129c0.0830078 -0.614258 0.140625 -1.23535 0.140625 -1.87012v-10.5498c0 -7.69336 -6.25879 -13.9531 -13.9531 -13.9531h-85.9453 c-7.69434 0 -13.9531 6.25977 -13.9531 13.9531v10.5498c0 0.750977 0.0771484 1.48438 0.192383 2.20605c-31.5391 3.2666 -56.2139 29.9971 -56.2139 62.3857v227.269c0 34.5859 28.1367 62.7227 62.7236 62.7227h74.0029c1.21289 22.5 7.8916 37.9912 20.7891 48.3359 c13.2861 10.6572 33.3877 15.6191 63.2607 15.6191h70.9463c29.835 0 49.8662 -4.96973 63.0381 -15.6387c12.7305 -10.3125 19.3213 -25.7969 20.5195 -48.3164h73.999zM165.678 387.724c-9.68164 -7.76465 -14.8066 -20.002 -15.8994 -38.1572h212.45 c-1.07422 18.2002 -6.12891 30.4443 -15.6787 38.1787c-10.7246 8.68457 -28.1445 12.7295 -54.8281 12.7295h-70.9463c-26.7441 0 -44.2529 -4.05176 -55.0977 -12.751zM156.829 -15.5684v0l-0.00195312 10.5498c0 0.481445 -0.423828 0.907227 -0.90625 0.907227h-85.9453 c-0.482422 0 -0.90625 -0.425781 -0.90625 -0.907227v-10.5498c0 -0.482422 0.423828 -0.90625 0.90625 -0.90625h85.9463c0.482422 0 0.907227 0.423828 0.907227 0.90625zM442.528 -15.5684v10.5498c0 0.481445 -0.424805 0.907227 -0.90625 0.907227h-85.9463 c-0.481445 0 -0.908203 -0.425781 -0.908203 -0.907227v-10.5498c0 -0.482422 0.426758 -0.90625 0.908203 -0.90625h85.9463c0.481445 0 0.90625 0.423828 0.90625 0.90625zM498.956 59.5742v0l-0.00292969 227.269c0 27.3916 -22.2842 49.6758 -49.6738 49.6758h-386.556 c-27.3926 0 -49.6768 -22.2842 -49.6768 -49.6758v-227.269c0 -27.3906 22.2842 -49.6758 49.6768 -49.6758h386.558c27.3896 0 49.6748 22.2852 49.6748 49.6758zM338.716 212.366c12.8213 0 23.2529 -10.4307 23.252 -23.252v-31.8105 c0 -12.8193 -10.4316 -23.249 -23.2539 -23.249h-43.5586v-43.5596c0 -12.8213 -10.4287 -23.252 -23.248 -23.252h-31.8105c-12.8213 0 -23.252 10.4307 -23.252 23.252v43.5596h-43.5586c-12.8203 0 -23.25 10.4297 -23.25 23.249v31.8105 c0 12.8213 10.4297 23.252 23.25 23.252h43.5586v43.5586c0 12.8203 10.4316 23.25 23.252 23.25h31.8105c12.8193 0 23.248 -10.4297 23.248 -23.25v-43.5586h43.5605zM348.922 157.304h-0.000976562v31.8105c0 5.62695 -4.57812 10.2051 -10.207 10.2051h-56.6055v56.6055 c0 5.62695 -4.57617 10.2041 -10.2012 10.2041h-31.8105c-5.62695 0 -10.2051 -4.57715 -10.2051 -10.2041v-56.6055h-56.6055c-5.62695 0 -10.2041 -4.57812 -10.2041 -10.2051v-31.8105c0 -5.62695 4.57715 -10.2031 10.2041 -10.2031h56.6055v-56.6055 c0 -5.62695 4.57812 -10.2051 10.2051 -10.2051h31.8105c5.625 0 10.2012 4.57812 10.2012 10.2051v56.6055h56.6074c5.62793 0 10.2061 4.57617 10.2061 10.2031z" }
const Icon = props => (
  <svg className={icon} width="40" height="50" viewBox="0 -300 500 1000" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <path d={icons[props.icon]}></path>
  </svg>
);
Icon.propTypes={
    icon:PropTypes.string
};

export default Icon;
