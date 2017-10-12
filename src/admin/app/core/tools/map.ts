export class Map{
    elements = new Array();
    i;
    // 获取MAP元素个数
    size() {
        return this.elements.length;
    };

    // 判断MAP是否为空
    isEmpty() {
        return (this.elements.length < 1);
    };

    // 删除MAP所有元素
    clear() {
        this.elements = new Array();
    };

    // 向MAP中增加元素（key, value)
    put(_key, _value) {
        this.elements.push({
            key: _key,
            value: _value
        });
    };

    putFirst(_key, _value) {
        var tempList = this.elements;
        this.elements = new Array();
        this.elements.push({
            key: _key,
            value: _value
        });
        for (var i = 0; i < tempList.length; i++) {
            this.elements.push(
                tempList[i]
            );
        }
    }

    // 删除指定KEY的元素，成功返回True，失败返回False
    remove(_key) {
        var bln = false;
        try {
            for (let i = 0; i < this.elements.length; i++) {
                if (this.elements[i].key == _key) {
                    this.elements.splice(i, 1);
                    return true;
                }
            }
        } catch (e) {
            bln = false;
        }
        return bln;
    };

    // 获取指定KEY的元素值VALUE，失败返回NULL
    get(_key) {
        try {
            for (let i = 0; i < this.elements.length; i++) {
                if (this.elements[i].key == _key) {
                    return this.elements[i].value;
                }
            }
        } catch (e) {
            return null;
        }
    };

    // 获取指定索引的元素（使用element.key，element.value获取KEY和VALUE），失败返回NULL
    element(_index) {
        if (_index < 0 || _index >= this.elements.length) {
            return null;
        }
        return this.elements[_index];
    };

    // 判断MAP中是否含有指定KEY的元素
    containsKey(_key) {
        var bln = false;
        try {
            for (let i = 0; i < this.elements.length; i++) {
                if (this.elements[i].key == _key) {
                    bln = true;
                }
            }
        } catch (e) {
            bln = false;
        }
        return bln;
    };

    // 判断MAP中是否含有指定VALUE的元素
    containsValue(_value) {
        var bln = false;
        try {
            for (let i = 0; i < this.elements.length; i++) {
                if (this.elements[i].value == _value) {
                    bln = true;
                }
            }
        } catch (e) {
            bln = false;
        }
        return bln;
    };

    //获取MAP中所有VALUE的数组（ARRAY）  
    values() {
        var arr = new Array();
        for (let i = 0; i < this.elements.length; i++) {
            arr.push(this.elements[i].value);
        }
        return arr;
    };

    //获取MAP中所有KEY的数组（ARRAY）  
    keys() {
        var arr = new Array();
        for (let i = 0; i < this.elements.length; i++) {
            arr.push(this.elements[i].key);
        }
        return arr;
    };
}  