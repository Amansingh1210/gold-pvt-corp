import product1 from './images/chemistry_facts.jpg'
import product2 from './images/Chemical_Analysis.jpg'
import product3 from './images/chemical_bonding.jpg'

const products = [
    {
        id:1,
        name: 'COMPRESSION TESTING MACHINE',
        desc: 'Compression testing machine with Micro Controller based with automatic pace rate controller of 2000 kN capacity – consists of a loading unit, an electrically operated hydraulic.',
        url: product1,
        capacity: 'CAPACITY: 2000KN'
    },
    {
        id: 2,
        name: 'PELTON WHEEL TURBINE TEST RIG',
        desc: 'Pelton wheel turbine is closed circuit working model of Pelton turbine. A centrifugal pump is provided to supply water to the turbine at high pressure.',
        url: product2,
        capacity: '1HP OUT PUT'
    },
    {
        id: 3,
        name: 'REFRIGERATION TEST RIG',
        desc: 'Test Rig enables students to study and understand Vapour Compression Cycle, its components, principle and working. All the components are mounted on rigid steel frame.',
        url: product3,
        capacity: 'CAPACITY : 1/3 TON'
    },
];

export default  products