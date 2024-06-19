!function() {
    "use strict";
    marked.setOptions({
        breaks: !0,
        highlight: function(e) {
            return Prism.highlight(e, Prism.languages.javascript, "javascript")
        }
    });
    const e = new marked.Renderer;
    e.link = function(e, t, a) {
        return '<a target="_blank" href="'.concat(e, '">').concat(a, "</a>")
    }
    ;
    class t extends React.Component {
        constructor(e) {
            super(e),
            this.state = {
                markdown: r,
                editorMaximized: !1,
                previewMaximized: !1
            },
            this.handleChange = this.handleChange.bind(this),
            this.handleEditorMaximize = this.handleEditorMaximize.bind(this),
            this.handlePreviewMaximize = this.handlePreviewMaximize.bind(this)
        }
        handleChange(e) {
            this.setState({
                markdown: e.target.value
            })
        }
        handleEditorMaximize() {
            this.setState({
                editorMaximized: !this.state.editorMaximized
            })
        }
        handlePreviewMaximize() {
            this.setState({
                previewMaximized: !this.state.previewMaximized
            })
        }
        render() {
            const e = this.state.editorMaximized ? ["editorWrap maximized", "previewWrap hide", "fa fa-compress"] : this.state.previewMaximized ? ["editorWrap hide", "previewWrap maximized", "fa fa-compress"] : ["editorWrap", "previewWrap", "fa fa-arrows-alt"];
            return React.createElement("div", null, React.createElement("div", {
                className: e[0]
            }, React.createElement(a, {
                icon: e[2],
                onClick: this.handleEditorMaximize,
                text: "Editor"
            }), React.createElement(n, {
                markdown: this.state.markdown,
                onChange: this.handleChange
            })), React.createElement("div", {
                className: "converter"
            }), React.createElement("div", {
                className: e[1]
            }, React.createElement(a, {
                icon: e[2],
                onClick: this.handlePreviewMaximize,
                text: "Previewer"
            }), React.createElement(i, {
                markdown: this.state.markdown
            })))
        }
    }
    const a = e=>React.createElement("div", {
        className: "toolbar"
    }, React.createElement("i", {
        className: "fa fa-free-code-camp",
        title: "no-stack-dub-sack"
    }), e.text, React.createElement("i", {
        className: e.icon,
        onClick: e.onClick
    }))
      , n = e=>React.createElement("textarea", {
        id: "editor",
        onChange: e.onChange,
        type: "text",
        value: e.markdown
    })
      , i = t=>React.createElement("div", {
        dangerouslySetInnerHTML: {
            __html: marked(t.markdown, {
                renderer: e
            })
        },
        id: "preview"
    })
      , r = "# WELCOME TO MY MARKDOWN PREVIEW\n\n## Feel free to take a look within.\n\n [myGithub](https://github.com/) \n\n`inline code: <span>Hi!!!</span>`\n\n```\ncode block:\n\n <div>\n   <h1></h1>\n   <img/>\n   <p></p>\n </div>\n```\nstate list any items below by replacing item with yours: \n\n- item1\n- item2\n- item3\n> blockquote!\n\n History define who you are. \n\n![West Logo](./me.jpg)\n Bolded text \nwrite any text the couple stars(replace the word example)\n **example**";
    ReactDOM.render(React.createElement(t, null), document.getElementById("app"))
}();
