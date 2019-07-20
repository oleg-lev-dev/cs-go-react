import React from 'react';
import styled from 'styled-components';

import Menu from 'components/Menu';
import Icon from 'components/Icon';

const StyledMenu = styled(Menu)`
  li {
    align-items: center;
    margin: 0 0 0 25px;
  }            
  
  a{
    &:hover{
      path{
        fill: #1b2129;
      }
    }
  }
`;

function MenuSocials() {
  return (
    <StyledMenu>
      <li>
        <a href="/">
          <Icon width={20}
                height={16}
                fill="#818d9e"
                viewBox="0 0 39 32"
                path="M38.9999,1.51865c-1.2859,5.94065 -4.71331,22.47147 -6.12617,29.00235c-0.13344,0.61271 -0.57556,1.11768 -1.17727,1.34323c-0.60149,0.22377 -1.27628,0.13261 -1.79976,-0.23206c-3.29398,-2.30759 -9.10163,-6.49535 -9.10163,-6.49535c0,0 -3.0566,2.83861 -5.03361,4.67438c-0.34958,0.32441 -0.85048,0.45051 -1.31853,0.33092c-0.46983,-0.12136 -0.82612,-0.47359 -0.98057,-0.92114c-1.23069,-3.56617 -3.59148,-10.57833 -3.59148,-10.57833c0,0 -5.05149,-1.57529 -8.90002,-2.70778c-0.55768,-0.16457 -0.94458,-0.65534 -0.96403,-1.22187c-0.01788,-0.56417 0.33639,-1.0792 0.88111,-1.27752c8.5815,-3.12336 29.57627,-10.87137 36.39355,-13.353c0.44212,-0.16161 0.9381,-0.07518 1.29573,0.22377c0.35763,0.29896 0.52035,0.76426 0.42267,1.2124zM31.94525,5.71115c-0.14462,-0.18352 -0.41127,-0.22673 -0.61132,-0.10182c-6.96838,4.37661 -19.33806,12.14711 -19.33806,12.14711l2.72982,8.85622l0.60663,-5.60854c0,0 10.54689,-9.35645 16.55929,-14.68972c0.17568,-0.15688 0.20005,-0.41913 0.05364,-0.60324z"/>
        </a>
      </li>
      <li>
        <a href="/">
          <Icon width={19}
                height={17}
                fill="#818d9e"
                viewBox="0 0 38 34"
                path="M29.6873,4.77652c1.96695,0 3.56242,1.61555 3.56242,3.60524c0,1.99147 -1.59547,3.60642 -3.56242,3.60642c-1.96673,0 -3.56242,-1.61496 -3.56242,-3.60642c0,-1.98969 1.59569,-3.60524 3.56242,-3.60524zM35.56536,14.32359c-1.32121,1.33731 -2.97613,2.13414 -4.69051,2.381l-9.24021,8.37552c0.41574,2.35791 -0.28186,4.87447 -2.07804,6.6913c-2.93165,2.96825 -7.67402,2.96825 -10.6059,0c-1.94415,-1.9595 -2.59727,-4.73121 -1.96651,-7.23949l-5.7891,-4.57433c-1.35787,-1.07447 -1.59547,-3.05765 -0.53398,-4.43107c1.06104,-1.3752 3.02039,-1.61614 4.37871,-0.54108l5.85571,4.63294c0.93497,-0.47182 1.94438,-0.73526 2.96876,-0.78794l7.59266,-11.64984c0.2519,-1.73454 1.03131,-3.40988 2.3523,-4.7466c3.24346,-3.2826 8.51266,-3.2826 11.75612,0c3.24324,3.28201 3.24324,8.60818 0,11.88959zM19.25977,26.40914c0,-2.78651 -2.24121,-5.05562 -5.0021,-5.05562c-0.35651,0 -0.69782,0.03789 -1.03176,0.10597l2.35274,1.86241c1.35787,1.07447 1.59547,3.05705 0.53443,4.43166c-0.61624,0.79682 -1.52908,1.21003 -2.45646,1.21003c-0.66832,0 -1.34334,-0.21845 -1.9151,-0.66895l-2.48618,-1.96838c0,0.03019 0,0.05269 0,0.08288c0,2.79421 2.23383,5.05503 4.99472,5.05503c2.76089,0 5.00232,-2.26082 5.0097,-5.05503zM35.62459,8.38176c0,-3.31871 -2.6565,-6.00873 -5.93729,-6.00873c-3.28057,0 -5.93707,2.69002 -5.93707,6.00873c0,3.32049 2.6565,6.00992 5.93707,6.00992c3.28079,0 5.93729,-2.68943 5.93729,-6.00992z"/>
        </a>
      </li>
      <li>
        <a href="/">
          <Icon width={21}
                height={12}
                fill="#818d9e"
                viewBox="0 0 42 24"
                path="M36.13904,15.25714c1.39453,1.3752 2.86259,2.66752 4.10981,4.17533c0.54918,0.67132 1.07422,1.3675 1.47611,2.14538c0.56595,1.11058 0.05767,2.32831 -0.92693,2.39461h-6.11901c-1.5749,0.13201 -2.83822,-0.50497 -3.89613,-1.59897c-0.8449,-0.87023 -1.63257,-1.79788 -2.44439,-2.70067c-0.33639,-0.36467 -0.68106,-0.71217 -1.09926,-0.98567c-0.83685,-0.54759 -1.55836,-0.38124 -2.03446,0.49609c-0.48369,0.89569 -0.59858,1.89023 -0.64775,2.8836c-0.06571,1.45867 -0.50023,1.83932 -1.95242,1.90563c-3.09214,0.14918 -6.02894,-0.32264 -8.75205,-1.89734c-2.40348,-1.39118 -4.26561,-3.34654 -5.88968,-5.56711c-3.15763,-4.32392 -5.57743,-9.07171 -7.75136,-13.9592c-0.49219,-1.1017 -0.1312,-1.68955 1.07467,-1.71441c1.99333,-0.04203 3.9947,-0.03374 5.98803,0c0.81204,0.0077 1.34513,0.48011 1.66498,1.25858c1.08272,2.6841 2.40326,5.23559 4.06019,7.59646c0.44301,0.62988 0.89407,1.25976 1.53422,1.69843c0.7052,0.48958 1.24656,0.33211 1.58273,-0.47123c0.21346,-0.50556 0.30376,-1.05316 0.35293,-1.59069c0.15579,-1.86478 0.18038,-3.72897 -0.09857,-5.58427c-0.17233,-1.15971 -0.82031,-1.91332 -1.96047,-2.1294c-0.58226,-0.11544 -0.50023,-0.33092 -0.21301,-0.67132c0.49196,-0.57897 0.95129,-0.94364 1.87822,-0.94364h6.91496c1.09099,0.21549 1.32881,0.71276 1.47611,1.81387l0.00827,7.75393c-0.00827,0.43097 0.21324,1.69902 0.97632,1.98081c0.61512,0.19891 1.017,-0.29067 1.37798,-0.6879c1.65671,-1.77302 2.838,-3.86868 3.89636,-6.04721c0.46715,-0.95311 0.86948,-1.94707 1.2631,-2.94161c0.28722,-0.73762 0.74655,-1.09282 1.56663,-1.07684l6.63579,0.01658c0.19714,0 0.39406,0 0.59098,0.03315c1.12362,0.19062 1.42716,0.67961 1.08249,1.7896c-0.54941,1.73158 -1.60776,3.18137 -2.64935,4.63116c-1.10753,1.54925 -2.29686,3.04877 -3.39612,4.6063c-1.00873,1.43322 -0.93475,2.14598 0.32008,3.38798z"/>
        </a>
      </li>
    </StyledMenu>
  );
}

export default MenuSocials;