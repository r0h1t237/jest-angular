import {pluck, range} from './utils'

describe('utils',()=>{

    describe('range',()=>{
        it('return coorect range from 1 to 5',()=>{
            expect(range(1,5)).toEqual([1,2,3,4]);
        })
        it('return coorect range from 41 to 44',()=>{
            expect(range(41,44)).toEqual([41,42,43]);
        })
    });

    describe('pluck',()=>{
        it('return all ids',()=>{
            const testData=[{id:'1',name:'foo'},{id:'2',name:'bar'},{id:'3',name:'baz'}];
            expect(pluck(testData,'id')).toEqual(['1','2','3'])
        })
        it('return all names',()=>{
            const testData=[{id:'1',name:'foo'},{id:'2',name:'bar'},{id:'3',name:'baz'}];
            expect(pluck(testData,'name')).toEqual(['foo','bar','baz'])
        })
    });
});
