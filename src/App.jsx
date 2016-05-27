import React   from 'react';
import Mozaik  from 'mozaik/browser';
import github  from 'mozaik-ext-github';
import travis  from 'mozaik-ext-travis';
import time    from 'mozaik-ext-time';
import weather from 'mozaik-ext-weather';
import jenkins from 'mozaik-ext-jenkins';


const MozaikComponent = Mozaik.Component.Mozaik;
const ConfigActions   = Mozaik.Actions.Config;


Mozaik.Registry.addExtensions({
    github,
    travis,
    time,
    weather,
    jenkins
});

React.render(<MozaikComponent/>, document.getElementById('mozaik'));

ConfigActions.loadConfig();
