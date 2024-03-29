/**
 * @license
 * Copyright (c) 2018 amCharts (Antanas Marcelionis, Martynas Majeris)
 *
 * This sofware is provided under multiple licenses. Please see below for
 * links to appropriate usage.
 *
 * Free amCharts linkware license. Details and conditions:
 * https://github.com/amcharts/amcharts4/blob/master/LICENSE
 *
 * One of the amCharts commercial licenses. Details and pricing:
 * https://www.amcharts.com/online-store/
 * https://www.amcharts.com/online-store/licenses-explained/
 *
 * If in doubt, contact amCharts at contact@amcharts.com
 *
 * PLEASE DO NOT REMOVE THIS COPYRIGHT NOTICE.
 * @hidden
 */
am4internal_webpackJsonp(["4859"], {
    "6JTK": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = {};
        r.d(i, "WordCloudDataItem", function() {
            return C
        }), r.d(i, "WordCloud", function() {
            return _
        }), r.d(i, "WordCloudSeriesDataItem", function() {
            return v
        }), r.d(i, "WordCloudSeries", function() {
            return x
        });
        var o = r("m4/l"),
            n = r("2I/e"),
            a = r("aM7D"),
            s = r("Vs7R"),
            l = r("C6dT"),
            u = r("p9TX"),
            p = r("vMqJ"),
            h = r("8ZqG"),
            c = r("aCit"),
            d = r("hGwe"),
            f = r("v9UT"),
            m = r("Gg2j"),
            y = r("58Sn"),
            g = r("tjMS"),
            b = r("hD5A"),
            v = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.className = "WordCloudSeriesDataItem", t.applyTheme(), t
                }
                return o.c(t, e), t.prototype.hide = function(t, r, i, o) {
                    return o || (o = ["value"]), e.prototype.hide.call(this, t, r, 0, o)
                }, t.prototype.setVisibility = function(t, r) {
                    r || (t ? this.setWorkingValue("value", this.values.value.value, 0, 0) : this.setWorkingValue("value", 0, 0, 0)), e.prototype.setVisibility.call(this, t, r)
                }, t.prototype.show = function(t, r, i) {
                    return i || (i = ["value"]), e.prototype.show.call(this, t, r, i)
                }, Object.defineProperty(t.prototype, "word", {
                    get: function() {
                        return this.properties.word
                    },
                    set: function(e) {
                        this.setProperty("word", e)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "label", {
                    get: function() {
                        var e = this;
                        if (!this._label) {
                            var t = this.component.labels.create();
                            this._label = t, this._disposers.push(t), t.parent = this.component.labelsContainer, t.isMeasured = !1, t.x = Object(g.c)(50), t.y = Object(g.c)(50), t.fontSize = 0, this.component.colors && (t.fill = this.component.colors.next()), this._disposers.push(new b.b(function() {
                                e.component && e.component.labels.removeValue(t)
                            })), this.addSprite(t), t.visible = this.visible
                        }
                        return this._label
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(a.b),
            x = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    t._adjustedFont = 1, t.className = "WordCloudSeries", t.accuracy = 5, t.isMeasured = !0, t.minFontSize = Object(g.c)(2), t.maxFontSize = Object(g.c)(20), t.excludeWords = [], t.layout = "absolute", t.angles = [0, 0, 90], t.rotationThreshold = .7, t.minWordLength = 1, t.width = Object(g.c)(100), t.height = Object(g.c)(100), t.step = 15, t.randomness = .2, t.labels.template.horizontalCenter = "middle", t.labels.template.verticalCenter = "middle", t.itemReaderText = "{word}: {value}", t.applyTheme();
                    var r = document.createElement("canvas");
                    r.style.position = "absolute", r.style.top = "0px", r.style.left = "0px", r.style.opacity = "0.5", t._canvas = r, t._ctx = r.getContext("2d"), t._maskSprite = t.createChild(s.a);
                    var i = t.createChild(l.a);
                    return i.shouldClone = !1, i.isMeasured = !1, i.layout = "none", t.labelsContainer = i, t._spiral = i.createChild(s.a), t._spiral.fillOpacity = .1, t._spiral.strokeOpacity = 1, t._spiral.stroke = Object(h.c)("#000"), t
                }
                return o.c(t, e), t.prototype.validateDataRange = function() {
                    e.prototype.validateDataRange.call(this), this.dataItems.each(function(e) {
                        e.label
                    })
                }, t.prototype.validate = function() {
                    e.prototype.validate.call(this), this._currentIndex = 0, this.dataItems.values.sort(function(e, t) {
                        return e.value == t.value ? 0 : e.value > t.value ? -1 : 1
                    }), this._processTimeout && this._processTimeout.dispose();
                    var t = this.innerWidth,
                        r = this.innerHeight;
                    if (t > 0 && r > 0) {
                        var i = this._ctx;
                        this._canvas.width = t, this._canvas.height = r, i.fillStyle = "white", i.fillRect(0, 0, t, r), this._points = d.spiralPoints(0, 0, t, r, 0, this.step, this.step);
                        for (var o = this.labelsContainer.rotation, n = this._points.length - 1; n >= 0; n--) {
                            var a = this._points[n];
                            if (a.x < -t / 2 || a.x > t / 2 || a.y < -r / 2 || a.y > r / 2) this._points.splice(n, 1);
                            else if (0 != o) {
                                var s = f.spritePointToSprite({
                                    x: a.x + t / 2,
                                    y: a.y + r / 2
                                }, this, this.labelsContainer);
                                a.x = s.x, a.y = s.y
                            }
                        }
                        var l = this._maskSprite;
                        if (l.path) {
                            var u = this.maxWidth,
                                p = this.maxHeight;
                            l.isMeasured = !0, l.validate();
                            var h = l.measuredWidth / l.scale,
                                c = l.measuredHeight / l.scale,
                                y = m.min(p / c, u / h);
                            y == 1 / 0 && (y = 1), l.horizontalCenter = "none", l.verticalCenter = "none", l.x = 0, l.y = 0, l.scale = 1, y = m.max(.001, y), l.horizontalCenter = "middle", l.verticalCenter = "middle", l.x = t / 2, l.y = r / 2, l.validatePosition(), this.mask = l, l.scale = y
                        }
                        this.processItem(this.dataItems.getIndex(this._currentIndex))
                    }
                }, t.prototype.processItem = function(e) {
                    var t = this,
                        r = this._ctx,
                        i = this.innerWidth,
                        o = this.innerHeight;
                    this.labelsContainer.x = i / 2, this.labelsContainer.y = o / 2;
                    var n = e.label,
                        a = y.k(n.element.node),
                        s = m.min(this.innerHeight, this.innerWidth),
                        l = f.relativeToValue(this.minFontSize, s),
                        u = f.relativeToValue(this.maxFontSize, s),
                        p = l + (u - l) * ((e.value - this.dataItem.values.value.low) / this.dataItem.values.value.high) * this._adjustedFont,
                        h = n.fontSize;
                    n.fontSize = p;
                    var c = 0;
                    (p - l) / (u - l) < this.rotationThreshold && (c = this.angles[Math.round(Math.random() * (this.angles.length - 1))]), n.fontSize = p, n.rotation = c, n.show(0), n.hardInvalidate(), n.validate();
                    var d = n.maxLeft,
                        g = n.maxRight,
                        b = n.maxTop,
                        v = n.maxBottom,
                        x = !0,
                        C = Math.round(Math.random() * this._points.length * this.randomness),
                        _ = n.pixelX,
                        P = n.pixelY,
                        w = 0,
                        V = 0;
                    for (f.used(this.labelsContainer.rotation); x;) {
                        if (C > this._points.length - 1) return x = !1, this._adjustedFont -= .1, void this.invalidate();
                        x = !1, w = this._points[C].x, V = this._points[C].y;
                        for (var S = n.pixelMarginLeft, W = n.pixelMarginRight, j = n.pixelMarginTop, O = {
                                x: w + d - S,
                                y: V + b - j,
                                width: g - d + S + W,
                                height: v - b + j + n.pixelMarginBottom
                            }, I = this._ctx.getImageData(O.x + i / 2, O.y + o / 2, O.width, O.height).data, T = 0; T < I.length; T += Math.pow(2, this.accuracy))
                            if (255 != I[T]) {
                                x = !0, n.currentText.length > 3 && (0 == c && g - d < 60 && this._points.splice(C, 1), 90 == Math.abs(c) && v - b < 50 && this._points.splice(C, 1));
                                break
                            } C += 5
                    }
                    0 == h ? (n.animate([{
                        property: "fontSize",
                        to: p,
                        from: h
                    }], this.interpolationDuration, this.interpolationEasing), n.x = w, n.y = V) : n.animate([{
                        property: "fontSize",
                        to: p,
                        from: h
                    }, {
                        property: "x",
                        to: w,
                        from: _
                    }, {
                        property: "y",
                        to: V,
                        from: P
                    }], this.interpolationDuration, this.interpolationEasing);
                    var z = w + i / 2,
                        D = V + o / 2;
                    r.translate(z, D);
                    var M = n.rotation * Math.PI / 180;
                    r.rotate(M), r.textAlign = "center", r.textBaseline = "middle", r.fillStyle = "blue", r.font = p + "px " + a, r.fillText(n.currentText, 0, 0), r.rotate(-M), r.translate(-z, -D), n.showOnInit && (n.hide(0), n.show()), this._currentIndex < this.dataItems.length - 1 && (this._processTimeout = this.setTimeout(function() {
                        t._currentIndex++, t.processItem(t.dataItems.getIndex(t._currentIndex))
                    }, 10))
                }, t.prototype.createLabel = function() {
                    return new u.a
                }, Object.defineProperty(t.prototype, "labels", {
                    get: function() {
                        if (!this._labels) {
                            var e = this.createLabel();
                            e.applyOnClones = !0, this._disposers.push(e), e.text = "{word}", e.margin(2, 3, 2, 3), e.padding(0, 0, 0, 0), this._labels = new p.e(e), this._disposers.push(new p.c(this._labels))
                        }
                        return this._labels
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.createDataItem = function() {
                    return new v
                }, Object.defineProperty(t.prototype, "colors", {
                    get: function() {
                        return this.getPropertyValue("colors")
                    },
                    set: function(e) {
                        this.setPropertyValue("colors", e, !0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.updateData = function() {
                    this.data = this.getWords(this.text)
                }, Object.defineProperty(t.prototype, "text", {
                    get: function() {
                        return this.getPropertyValue("text")
                    },
                    set: function(e) {
                        this.setPropertyValue("text", e) && this.updateData()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "maxCount", {
                    get: function() {
                        return this.getPropertyValue("maxCount")
                    },
                    set: function(e) {
                        this.setPropertyValue("maxCount", e) && this.updateData()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "minValue", {
                    get: function() {
                        return this.getPropertyValue("minValue")
                    },
                    set: function(e) {
                        this.setPropertyValue("minValue", e) && this.updateData()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "excludeWords", {
                    get: function() {
                        return this.getPropertyValue("excludeWords")
                    },
                    set: function(e) {
                        this.setPropertyValue("excludeWords", e) && this.updateData()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "maxFontSize", {
                    get: function() {
                        return this.getPropertyValue("maxFontSize")
                    },
                    set: function(e) {
                        this.setPropertyValue("maxFontSize", e, !0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "minFontSize", {
                    get: function() {
                        return this.getPropertyValue("minFontSize")
                    },
                    set: function(e) {
                        this.setPropertyValue("minFontSize", e, !0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "randomness", {
                    get: function() {
                        return this.getPropertyValue("randomness")
                    },
                    set: function(e) {
                        this.setPropertyValue("randomness", e, !0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "step", {
                    get: function() {
                        return this.getPropertyValue("step")
                    },
                    set: function(e) {
                        this.setPropertyValue("step", e, !0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "accuracy", {
                    get: function() {
                        return this.getPropertyValue("accuracy")
                    },
                    set: function(e) {
                        this.setPropertyValue("accuracy", e, !0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "minWordLength", {
                    get: function() {
                        return this.getPropertyValue("minWordLength")
                    },
                    set: function(e) {
                        this.setPropertyValue("minWordLength", e) && this.updateData()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "rotationThreshold", {
                    get: function() {
                        return this.getPropertyValue("rotationThreshold")
                    },
                    set: function(e) {
                        this.setPropertyValue("rotationThreshold", e, !0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "angles", {
                    get: function() {
                        return this.getPropertyValue("angles")
                    },
                    set: function(e) {
                        this.setPropertyValue("angles", e, !0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "maskSprite", {
                    get: function() {
                        return this._maskSprite
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.copyFrom = function(t) {
                    e.prototype.copyFrom.call(this, t), this.labels.template.copyFrom(t.labels.template)
                }, t.prototype.getWords = function(e) {
                    if (e) {
                        this.dataFields.word = "word", this.dataFields.value = "value";
                        var t = new RegExp("[A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԣԱ-Ֆՙա-ևא-תװ-ײء-يٮ-ٯٱ-ۓەۥ-ۦۮ-ۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴ-ߵߺऄ-हऽॐक़-ॡॱ-ॲॻ-ॿঅ-ঌএ-ঐও-নপ-রলশ-হঽৎড়-ঢ়য়-ৡৰ-ৱਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽૐૠ-ૡଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽଡ଼-ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘ-ౙౠ-ౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠ-ೡഅ-ഌഎ-ഐഒ-നപ-ഹഽൠ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะา-ำเ-ๆກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆໜ-ໝༀཀ-ཇཉ-ཬྈ-ྋက-ဪဿၐ-ၕၚ-ၝၡၥ-ၦၮ-ၰၵ-ႁႎႠ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦩᧁ-ᧇᨀ-ᨖᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮ-ᮯᰀ-ᰣᱍ-ᱏᱚ-ᱽᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₔℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀䶵一鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘟꘪ-ꘫꙀ-ꙟꙢ-ꙮꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꤊ-ꤥꤰ-ꥆꨀ-ꨨꩀ-ꩂꩄ-ꩋ가힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ0-9@+]+", "ig"),
                            r = e.match(t);
                        if (!r) return [];
                        for (var i = [], o = void 0; o = r.pop();) {
                            for (var n = void 0, a = 0; a < i.length; a++)
                                if (i[a].word.toLowerCase() == o.toLowerCase()) {
                                    n = i[a];
                                    break
                                } n ? (n.value++, this.isCapitalized(o) || (n.word = o)) : i.push({
                                word: o,
                                value: 1
                            })
                        }
                        var s = this.excludeWords;
                        if (this.minValue > 1 || this.minWordLength > 1 || s && s.length > 0)
                            for (a = i.length - 1; a >= 0; a--) {
                                var l = i[a];
                                l.value < this.minValue && i.splice(a, 1), l.word.length < this.minWordLength && i.splice(a, 1), -1 !== s.indexOf(l.word) && i.splice(a, 1)
                            }
                        return i.sort(function(e, t) {
                            return e.value == t.value ? 0 : e.value > t.value ? -1 : 1
                        }), i.length > this.maxCount && (i = i.slice(0, this.maxCount)), i
                    }
                }, t.prototype.isCapitalized = function(e) {
                    var t = e.toLowerCase();
                    return e[0] != t[0] && e.substr(1) == t.substr(1) && e != t
                }, t
            }(a.a);
        c.b.registeredClasses.WordCloudSeries = x, c.b.registeredClasses.WordCloudSeriesDataItem = v;
        var C = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.className = "WordCloudDataItem", t.applyTheme(), t
                }
                return o.c(t, e), t
            }(n.b),
            _ = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.className = "WordCloud", t.seriesContainer.isMeasured = !0, t.seriesContainer.layout = "absolute", t.applyTheme(), t
                }
                return o.c(t, e), t.prototype.createSeries = function() {
                    return new x
                }, t
            }(n.a);
        c.b.registeredClasses.WordCloud = _, c.b.registeredClasses.WordCloudDataItem = C, window.am4plugins_wordCloud = i
    }
}, ["6JTK"]);
//# sourceMappingURL=wordCloud.js.map