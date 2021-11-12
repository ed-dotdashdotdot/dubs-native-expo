import React from 'react';
import { ScrollView, Text } from 'react-native';

import InfoInner from '../InfoInner';
import PageHeading from '../PageHeading';

import { fontFamily } from '../../configuration/config.json';

const AppInfo = () => (
  <ScrollView>
    <InfoInner>
      <PageHeading 
        textKey='appInfo' 
      />
      <Text style={{ color:'white', fontSize:20, marginBottom:12, fontFamily:fontFamily, }}>
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
      </Text>

    </InfoInner>
  </ScrollView>
);

export default AppInfo;
