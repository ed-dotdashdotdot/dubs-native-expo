import React from 'react';
import { ScrollView, Text } from 'react-native';

import InfoInner from '../InfoInner';
import PageHeading from '../PageHeading';

import { 
  fontFamily 
} from '../../configuration/config.json';

import styles from '../../css/style.js';

const AppInfo = () => (
  <ScrollView>
    <InfoInner>
      <PageHeading 
        textKey='appInfo' 
      />

      <Text style={[{fontFamily:fontFamily},styles.bodyText]}>
        Apps made available through the App Store are licensed, not sold, to you. Your license to each App is subject to your prior acceptance of either this Licensed Application End User License Agreement (“Standard EULA”), or a custom end user license agreement between you and the Application Provider (“Custom EULA”), if one is provided. Your license to any Apple App under this Standard EULA or Custom EULA is granted by Apple, and your license to any Third Party App under this Standard EULA or Custom EULA is granted by the Application Provider of that Third Party App. Any App that is subject to this Standard EULA is referred to herein as the “Licensed Application.” The Application Provider or Apple as applicable (“Licensor”) reserves all rights in and to the Licensed Application not expressly granted to you under this Standard EULA.
      </Text>
      <Text style={[{fontFamily:fontFamily},styles.bodyText]}>
        a. Scope of License: Licensor grants to you a nontransferable license to use the Licensed Application on any Apple-branded products that you own or control and as permitted by the Usage Rules. The terms of this Standard EULA will govern any content, materials, or services accessible from or purchased within the Licensed Application as well as upgrades provided by Licensor that replace or supplement the original Licensed Application, unless such upgrade is accompanied by a Custom EULA. Except as provided in the Usage Rules, you may not distribute or make the Licensed Application available over a network where it could be used by multiple devices at the same time. You may not transfer, redistribute or sublicense the Licensed Application and, if you sell your Apple Device to a third party, you must remove the Licensed Application from the Apple Device before doing so. You may not copy (except as permitted by this license and the Usage Rules), reverse-engineer, disassemble, attempt to derive the source code of, modify, or create derivative works of the Licensed Application, any updates, or any part thereof (except as and only to the extent that any foregoing restriction is prohibited by applicable law or to the extent as may be permitted by the licensing terms governing use of any open-sourced components included with the Licensed Application).
      </Text>
      <Text style={[{fontFamily:fontFamily},styles.bodyText]}>
        b. Consent to Use of Data: You agree that Licensor may collect and use technical data and related information—including but not limited to technical information about your device, system and application software, and peripherals—that is gathered periodically to facilitate the provision of software updates, product support, and other services to you (if any) related to the Licensed Application. Licensor may use this information, as long as it is in a form that does not personally identify you, to improve its products or to provide services or technologies to you.
        </Text>
      <Text style={[{fontFamily:fontFamily},styles.bodyText]}>
        c. Termination. This Standard EULA is effective until terminated by you or Licensor. Your rights under this Standard EULA will terminate automatically if you fail to comply with any of its terms. 
        </Text>
      <Text style={[{fontFamily:fontFamily},styles.bodyText]}>
        d. External Services. The Licensed Application may enable access to Licensor’s and/or third-party services and websites (collectively and individually, "External Services"). You agree to use the External Services at your sole risk. Licensor is not responsible for examining or evaluating the content or accuracy of any third-party External Services, and shall not be liable for any such third-party External Services. Data displayed by any Licensed Application or External Service, including but not limited to financial, medical and location information, is for general informational purposes only and is not guaranteed by Licensor or its agents. You will not use the External Services in any manner that is inconsistent with the terms of this Standard EULA or that infringes the intellectual property rights of Licensor or any third party. You agree not to use the External Services to harass, abuse, stalk, threaten or defame any person or entity, and that Licensor is not responsible for any such use. External Services may not be available in all languages or in your Home Country, and may not be appropriate or available for use in any particular location. To the extent you choose to use such External Services, you are solely responsible for compliance with any applicable laws. Licensor reserves the right to change, suspend, remove, disable or impose access restrictions or limits on any External Services at any time without notice or liability to you. 
        </Text>
      <Text style={[{fontFamily:fontFamily},styles.bodyText]}>
        e. NO WARRANTY: YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT USE OF THE LICENSED APPLICATION IS AT YOUR SOLE RISK. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE LICENSED APPLICATION AND ANY SERVICES PERFORMED OR PROVIDED BY THE LICENSED APPLICATION ARE PROVIDED "AS IS" AND “AS AVAILABLE,” WITH ALL FAULTS AND WITHOUT WARRANTY OF ANY KIND, AND LICENSOR HEREBY DISCLAIMS ALL WARRANTIES AND CONDITIONS WITH RESPECT TO THE LICENSED APPLICATION AND ANY SERVICES, EITHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES AND/OR CONDITIONS OF MERCHANTABILITY, OF SATISFACTORY QUALITY, OF FITNESS FOR A PARTICULAR PURPOSE, OF ACCURACY, OF QUIET ENJOYMENT, AND OF NONINFRINGEMENT OF THIRD-PARTY RIGHTS. NO ORAL OR WRITTEN INFORMATION OR ADVICE GIVEN BY LICENSOR OR ITS AUTHORIZED REPRESENTATIVE SHALL CREATE A WARRANTY. SHOULD THE LICENSED APPLICATION OR SERVICES PROVE DEFECTIVE, YOU ASSUME THE ENTIRE COST OF ALL NECESSARY SERVICING, REPAIR, OR CORRECTION. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES OR LIMITATIONS ON APPLICABLE STATUTORY RIGHTS OF A CONSUMER, SO THE ABOVE EXCLUSION AND LIMITATIONS MAY NOT APPLY TO YOU.
        </Text>
      <Text style={[{fontFamily:fontFamily},styles.bodyText]}>
        f. Limitation of Liability. TO THE EXTENT NOT PROHIBITED BY LAW, IN NO EVENT SHALL LICENSOR BE LIABLE FOR PERSONAL INJURY OR ANY INCIDENTAL, SPECIAL, INDIRECT, OR CONSEQUENTIAL DAMAGES WHATSOEVER, INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF PROFITS, LOSS OF DATA, BUSINESS INTERRUPTION, OR ANY OTHER COMMERCIAL DAMAGES OR LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE LICENSED APPLICATION, HOWEVER CAUSED, REGARDLESS OF THE THEORY OF LIABILITY (CONTRACT, TORT, OR OTHERWISE) AND EVEN IF LICENSOR HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OF LIABILITY FOR PERSONAL INJURY, OR OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THIS LIMITATION MAY NOT APPLY TO YOU. In no event shall Licensor’s total liability to you for all damages (other than as may be required by applicable law in cases involving personal injury) exceed the amount of fifty dollars ($50.00). The foregoing limitations will apply even if the above stated remedy fails of its essential purpose.
        </Text>
      <Text style={[{fontFamily:fontFamily},styles.bodyText]}>
        g. You may not use or otherwise export or re-export the Licensed Application except as authorized by United States law and the laws of the jurisdiction in which the Licensed Application was obtained. In particular, but without limitation, the Licensed Application may not be exported or re-exported (a) into any U.S.-embargoed countries or (b) to anyone on the U.S. Treasury Department's Specially Designated Nationals List or the U.S. Department of Commerce Denied Persons List or Entity List. By using the Licensed Application, you represent and warrant that you are not located in any such country or on any such list. You also agree that you will not use these products for any purposes prohibited by United States law, including, without limitation, the development, design, manufacture, or production of nuclear, missile, or chemical or biological weapons.
        </Text>
      <Text style={[{fontFamily:fontFamily},styles.bodyText]}>
        h. The Licensed Application and related documentation are "Commercial Items", as that term is defined at 48 C.F.R. §2.101, consisting of "Commercial Computer Software" and "Commercial Computer Software Documentation", as such terms are used in 48 C.F.R. §12.212 or 48 C.F.R. §227.7202, as applicable. Consistent with 48 C.F.R. §12.212 or 48 C.F.R. §227.7202-1 through 227.7202-4, as applicable, the Commercial Computer Software and Commercial Computer Software Documentation are being licensed to U.S. Government end users (a) only as Commercial Items and (b) with only those rights as are granted to all other end users pursuant to the terms and conditions herein. Unpublished-rights reserved under the copyright laws of the United States.
        </Text>
      <Text style={[{fontFamily:fontFamily},styles.bodyText]}>
        i. Except to the extent expressly provided in the following paragraph, this Agreement and the relationship between you and Apple shall be governed by the laws of the State of California, excluding its conflicts of law provisions. You and Apple agree to submit to the personal and exclusive jurisdiction of the courts located within the county of Santa Clara, California, to resolve any dispute or claim arising from this Agreement. If (a) you are not a U.S. citizen; (b) you do not reside in the U.S.; (c) you are not accessing the Service from the U.S.; and (d) you are a citizen of one of the countries identified below, you hereby agree that any dispute or claim arising from this Agreement shall be governed by the applicable law set forth below, without regard to any conflict of law provisions, and you hereby irrevocably submit to the non-exclusive jurisdiction of the courts located in the state, province or country identified below whose law governs:
        </Text>
      <Text style={[{fontFamily:fontFamily},styles.bodyText]}>
        If you are a citizen of any European Union country or Switzerland, Norway or Iceland, the governing law and forum shall be the laws and courts of your usual place of residence.
        </Text>
      <Text style={[{fontFamily:fontFamily},styles.bodyText]}>
        Specifically excluded from application to this Agreement is that law known as the United Nations Convention on the International Sale of Goods.
      </Text>




      {/* <Text style={{ color:'white', fontSize:20, marginBottom:12, fontFamily:fontFamily, }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum consequat odio, vel egestas mi varius aliquam. In dui lectus, sodales sit amet posuere ac, vehicula in urna. Vivamus convallis neque in urna venenatis, eget lacinia odio scelerisque. Ut ac iaculis justo. Nam ut facilisis nisl. Phasellus in posuere libero. Donec dapibus bibendum porttitor. Praesent vitae condimentum lectus. Quisque dictum pretium gravida. Mauris condimentum rhoncus ante ut pellentesque. Etiam mattis egestas urna, blandit bibendum sapien blandit in. Sed accumsan nec nisi eget sollicitudin.
      </Text>
      <Text style={{ color:'white', fontSize:20, marginBottom:12, fontFamily:fontFamily, }}>
        Vivamus euismod justo eu enim facilisis, aliquet volutpat augue commodo. Integer a consequat quam. Ut auctor dolor a tortor aliquet, quis dignissim ante semper. In tincidunt hendrerit sagittis. Cras sem sapien, lobortis at fringilla eu, vulputate eu ipsum. Quisque commodo nibh eget felis blandit, non accumsan eros condimentum. Praesent vel justo in nulla commodo dignissim.
      </Text>
      <Text style={{ color:'white', fontSize:20, marginBottom:12, fontFamily:fontFamily, }}>
        Aenean rutrum nibh tellus, sit amet porta tortor pharetra at. Quisque quis tortor ut sem laoreet ultrices. Suspendisse leo elit, mattis ac tempus ut, vestibulum ac risus. Integer suscipit sapien orci, ut dignissim mi fringilla vitae. Phasellus dictum purus justo, et pellentesque lacus aliquet sit amet. Maecenas id lacus non dui vestibulum molestie. Phasellus lobortis tortor vel eros tempor tincidunt.
      </Text>
      <Text style={{ color:'white', fontSize:20, marginBottom:12, fontFamily:fontFamily, }}>
        Aenean tincidunt vulputate nunc quis mattis. Aliquam consequat, ante non sodales molestie, lectus lorem sagittis nunc, semper vulputate justo mauris id elit. Vestibulum sed elementum quam. Curabitur quis nisl sit amet enim suscipit mattis eu ac quam. Phasellus suscipit gravida velit vitae tristique. Donec augue elit, scelerisque vel facilisis a, vestibulum id lectus. Pellentesque nec ultrices augue. Morbi tortor quam, mattis ut ligula ut, commodo auctor massa. Curabitur ut sem arcu. Aenean imperdiet libero ac ex rutrum, imperdiet mattis ipsum elementum. In vitae velit fermentum, malesuada enim sed, accumsan ipsum. Curabitur arcu nulla, euismod vitae enim nec, porta sagittis diam. Duis porta orci sed quam rhoncus dapibus.
      </Text>
      <Text style={{ color:'white', fontSize:20, marginBottom:12, fontFamily:fontFamily, }}>
        Sed sit amet fermentum massa. Fusce interdum orci lectus, a mattis dui commodo eu. Phasellus rutrum pharetra sem, id luctus dui laoreet eu. Aenean a metus rutrum erat hendrerit iaculis. Vivamus at imperdiet justo. Pellentesque et mauris porta, vestibulum sapien in, eleifend velit. Sed tempor, mauris sit amet sollicitudin tincidunt, sapien libero interdum mauris, id sagittis felis ipsum non nunc. Pellentesque varius, eros ut maximus convallis, neque nibh congue nisl, nec viverra nulla erat ac ipsum. Praesent commodo, risus non tincidunt imperdiet, diam nunc condimentum mi, in rutrum ex orci at velit.
      </Text>
      <Text style={{ color:'white', fontSize:20, marginBottom:12, fontFamily:fontFamily, }}>
        Phasellus varius et elit eget dapibus. Maecenas in volutpat velit, nec tincidunt magna. Nullam ac dui semper, sagittis urna eget, sollicitudin quam. Nullam ac odio sit amet est ultrices tempor vel nec purus. Nam blandit quam nibh, eget molestie diam posuere vel. Sed quis placerat augue. Fusce tincidunt ipsum faucibus ante vulputate, a sagittis nisl hendrerit. Sed vehicula neque at massa iaculis posuere. Sed lobortis mattis eleifend. Vestibulum non pharetra quam, vitae volutpat augue. Fusce facilisis hendrerit lorem, sed porttitor urna aliquam vitae. Maecenas tempor et nunc nec eleifend. Aliquam erat volutpat. Curabitur eleifend dapibus elit, a lacinia nunc faucibus at.
      </Text>
      <Text style={{ color:'white', fontSize:20, marginBottom:12, fontFamily:fontFamily, }}>
        Donec pharetra dignissim ultrices. Duis venenatis elit nec maximus tristique. Vestibulum tempor euismod purus, non ornare sapien lacinia sed. Nunc ut sem fringilla, iaculis felis quis, pharetra urna. Duis id mollis purus. Pellentesque tempus urna at risus sodales, vitae malesuada diam sodales. Nunc arcu odio, scelerisque id placerat sed, vestibulum ac tortor.
      </Text>
      <Text style={{ color:'white', fontSize:20, marginBottom:12, fontFamily:fontFamily, }}>
        Sed nunc nunc, varius at sem sit amet, congue feugiat tellus. Nulla sed tortor leo. Vivamus ut eleifend arcu. Ut et massa lorem. Ut vestibulum massa risus, a faucibus arcu tristique nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus sit amet ex dui. Nam iaculis, lectus vel pretium hendrerit, nulla nibh ullamcorper sem, eu tempor ante arcu eget lectus. Cras aliquam, eros quis viverra ornare, est mauris luctus risus, sit amet rhoncus nisi nibh sed augue. Sed mollis, justo vitae condimentum mattis, libero nisi efficitur metus, vitae eleifend tellus turpis a justo. Suspendisse efficitur dolor id justo euismod ultrices. Nullam ut dui in velit lacinia tempor. Etiam auctor, orci quis pulvinar rutrum, felis justo fringilla justo, eget tempus ligula dui vitae neque. Donec lobortis metus varius aliquet blandit.
      </Text>
      <Text style={{ color:'white', fontSize:20, marginBottom:12, fontFamily:fontFamily, }}>
        Pellentesque et mollis ligula, ac efficitur orci. Donec ullamcorper dolor erat, sed fringilla risus commodo a. Fusce vitae volutpat nibh. Vestibulum sed fermentum ligula, at pharetra turpis. Sed id nulla faucibus, elementum ante sed, lobortis purus. Vivamus et tincidunt magna. Sed a enim nec est feugiat faucibus. Phasellus dictum nisl vitae odio sollicitudin porttitor. Cras et enim nec lacus ultricies sollicitudin.
      </Text>
      <Text style={{ color:'white', fontSize:20, marginBottom:12, fontFamily:fontFamily, }}>
        Vivamus ultrices pulvinar tristique. Aenean purus est, mattis at tempor eu, placerat id ipsum. Aenean mattis erat lobortis, placerat dui ac, vehicula nisi. Sed efficitur imperdiet porta. Pellentesque id tincidunt dui. Suspendisse ut pellentesque dolor, ac interdum nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis lobortis convallis magna a sagittis.
      </Text>
      <Text style={{ color:'white', fontSize:20, marginBottom:12, fontFamily:fontFamily, }}>
        Nam vulputate lorem id elit suscipit molestie. Nullam et ipsum ut velit tempus facilisis non eget mi. Sed enim nulla, condimentum et rhoncus non, fringilla non quam. Donec dapibus, metus nec volutpat ornare, diam nulla vestibulum urna, sed malesuada nunc dolor vel libero. Morbi tempor, nibh nec commodo finibus, nulla neque ornare ligula, suscipit pharetra nibh mauris ut quam. Sed et pretium sem. Vestibulum tincidunt metus sit amet ipsum bibendum imperdiet. Cras consectetur ultricies ligula ac bibendum. Praesent nec urna enim. Morbi mollis libero sed nisl molestie finibus. Suspendisse at justo nec enim auctor feugiat. Maecenas maximus magna placerat, elementum velit sit amet, laoreet ex.
      </Text>
      <Text style={{ color:'white', fontSize:20, marginBottom:12, fontFamily:fontFamily, }}>
        Nulla rhoncus suscipit rutrum. Suspendisse magna orci, fermentum ac leo in, imperdiet pretium tellus. Cras eget posuere justo, id vulputate ipsum. Aliquam iaculis interdum risus, eu facilisis risus blandit et. Vestibulum iaculis ipsum arcu, nec commodo ipsum accumsan consequat. Vivamus a metus sit amet sem tempor commodo. Vivamus scelerisque et felis a commodo. Morbi enim lacus, sollicitudin id leo tincidunt, tempus iaculis urna. Maecenas facilisis tellus id tellus laoreet sodales. Cras ultrices mi sit amet arcu ultricies porttitor. Curabitur in volutpat turpis. Suspendisse potenti. Duis pulvinar venenatis sollicitudin. Nulla pulvinar ante ac metus venenatis, at viverra ipsum egestas. Donec efficitur diam at purus mollis, at tristique ligula porttitor.
      </Text>
      <Text style={{ color:'white', fontSize:20, marginBottom:12, fontFamily:fontFamily, }}>
        Suspendisse finibus risus at nibh elementum, vitae volutpat orci consectetur. Nulla id tellus tempor, volutpat augue sed, blandit mi. Aenean sit amet semper tellus, nec consectetur lacus. Suspendisse pulvinar sodales blandit. Curabitur ultricies in purus et egestas. Praesent sed lorem pellentesque, maximus nunc mollis, vehicula ligula. Suspendisse eget feugiat dolor. Praesent id consectetur nunc.
      </Text>
      <Text style={{ color:'white', fontSize:20, marginBottom:12, fontFamily:fontFamily, }}>
        Nulla eget erat sit amet sem efficitur mollis. Nullam ac vulputate elit, ac facilisis tortor. Pellentesque eu placerat lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed sagittis iaculis orci, in fringilla ex aliquam quis. Nam sit amet facilisis mi. Sed orci est, rhoncus eu bibendum eu, scelerisque non dolor. Nunc condimentum, leo et pulvinar facilisis, purus nisl pretium ligula, vitae imperdiet erat elit non dui. Proin nisl elit, tristique nec varius ut, pulvinar at dui. Nam cursus lacus ac finibus ultrices. Sed molestie erat at metus tristique suscipit.
      </Text>
      <Text style={{ color:'white', fontSize:20, marginBottom:12, fontFamily:fontFamily, }}>
        Nullam purus est, eleifend in efficitur sit amet, fermentum quis nibh. Curabitur nec nibh porttitor, dictum tellus quis, sodales mi. Vestibulum posuere dapibus tempus. Aliquam enim mi, finibus quis mollis vitae, eleifend sed diam. Sed feugiat semper consectetur. Quisque accumsan nisi laoreet urna lacinia, id aliquam arcu finibus. Cras dapibus id nulla ut cursus. Etiam venenatis felis eu leo accumsan condimentum. Proin semper fringilla arcu, eu egestas est efficitur sed.
      </Text> */}

    </InfoInner>
  </ScrollView>
);

export default AppInfo;
