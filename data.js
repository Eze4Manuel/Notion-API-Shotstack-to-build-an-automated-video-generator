
exports.template = {
    "timeline": {
        "soundtrack": {
            "src": "https://shotstack-assets.s3.ap-southeast-2.amazonaws.com/music/unminus/ambisax.mp3",
            "effect": "fadeOut"
        },
        "background": "#000000",
        "tracks": [
            {
                "clips": [
                    {
                        "asset": {
                            "type": "html",
                            "html": "<p data-html-type=\"text\">{{street_address}}</p>",
                            "css": "p { color: #f0c20c; font-size: 40px; font-family: Roboto Black; text-align: left; }",
                            "width": 353,
                            "height": 141,
                            "position": "bottom"
                        },
                        "start": 1.2,
                        "length": 4.2,
                        "position": "center",
                        "offset": {
                            "x": -0.285,
                            "y": 0.192
                        },
                        "transition": {
                            "in": "slideRight",
                            "out": "slideLeft"
                        },
                        "fit": "none",
                        "scale": 1
                    },
                    {
                        "asset": {
                            "type": "html",
                            "html": "<p data-html-type=\"text\">{{postcode}}</p>",
                            "css": "p { color: #ffffff; font-size: 22px; font-family: Roboto Black; text-align: left; }",
                            "width": 320,
                            "height": 66,
                            "position": "bottom"
                        },
                        "start": 1.3,
                        "length": 3.9,
                        "position": "center",
                        "offset": {
                            "x": -0.3,
                            "y": 0.034
                        },
                        "transition": {
                            "in": "slideRight",
                            "out": "slideLeft"
                        },
                        "fit": "none",
                        "scale": 1
                    },
                    {
                        "asset": {
                            "type": "html",
                            "html": "<p data-html-type=\"text\">{{property_type}}</p>",
                            "css": "p { color: #ffffff; font-size: 17px; font-family: Roboto Black; text-align: left; }",
                            "width": 320,
                            "height": 32,
                            "position": "center"
                        },
                        "start": 1.4,
                        "length": 4,
                        "position": "center",
                        "offset": {
                            "x": -0.3,
                            "y": -0.122
                        },
                        "transition": {
                            "in": "fade",
                            "out": "fade"
                        },
                        "fit": "none",
                        "scale": 1
                    }
                ]
            },
            {
                "clips": [
                    {
                        "asset": {
                            "type": "image",
                            "src": "https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/templates/real-estate-slideshow/bed.png"
                        },
                        "start": 1.4,
                        "length": 4,
                        "position": "center",
                        "offset": {
                            "x": -0.445,
                            "y": -0.054
                        },
                        "transition": {
                            "in": "fade",
                            "out": "fade"
                        },
                        "scale": 1,
                        "fit": "none"
                    },
                    {
                        "asset": {
                            "type": "image",
                            "src": "https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/templates/real-estate-slideshow/bath.png"
                        },
                        "start": 1.4,
                        "length": 4,
                        "position": "center",
                        "offset": {
                            "x": -0.368,
                            "y": -0.054
                        },
                        "transition": {
                            "in": "fade",
                            "out": "fade"
                        },
                        "scale": 1,
                        "fit": "none"
                    },
                    {
                        "asset": {
                            "type": "image",
                            "src": "https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/templates/real-estate-slideshow/car.png"
                        },
                        "start": 1.4,
                        "length": 4,
                        "offset": {
                            "x": -0.286,
                            "y": -0.054
                        },
                        "transition": {
                            "in": "fade",
                            "out": "fade"
                        },
                        "position": "center",
                        "scale": 1,
                        "fit": "none"
                    },
                    {
                        "asset": {
                            "type": "html",
                            "html": "<p data-html-type=\"text\">{{Bedroom_count}}</p>",
                            "css": "p { color: #ffffff; font-size: 18px; font-family: Roboto Black; text-align: left; }",
                            "width": 36,
                            "height": 26,
                            "position": "center"
                        },
                        "start": 1.4,
                        "length": 4,
                        "position": "center",
                        "offset": {
                            "y": -0.055,
                            "x": -0.405
                        },
                        "transition": {
                            "in": "fade",
                            "out": "fade"
                        },
                        "fit": "none",
                        "scale": 1
                    },
                    {
                        "asset": {
                            "type": "html",
                            "html": "<p data-html-type=\"text\">{{bathroom_count}}</p>",
                            "css": "p { color: #ffffff; font-size: 18px; font-family: Roboto Black; text-align: left; }",
                            "width": 36,
                            "height": 26,
                            "position": "center"
                        },
                        "start": 1.4,
                        "length": 4,
                        "position": "center",
                        "offset": {
                            "y": -0.055,
                            "x": -0.327
                        },
                        "transition": {
                            "in": "fade",
                            "out": "fade"
                        },
                        "fit": "none",
                        "scale": 1
                    },
                    {
                        "asset": {
                            "type": "html",
                            "html": "<p data-html-type=\"text\">{{garage_space}}</p>",
                            "css": "p { color: #ffffff; font-size: 18px; font-family: Roboto Black; text-align: left; }",
                            "width": 36,
                            "height": 26,
                            "position": "center"
                        },
                        "start": 1.4,
                        "length": 4,
                        "position": "left",
                        "offset": {
                            "y": -0.055,
                            "x": -0.246
                        },
                        "transition": {
                            "in": "fade",
                            "out": "fade"
                        },
                        "fit": "none",
                        "scale": 1
                    }
                ]
            },
            {
                "clips": [
                    {
                        "asset": {
                            "type": "image",
                            "src": "https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/templates/real-estate-slideshow/content-left.png"
                        },
                        "start": 0,
                        "offset": {
                            "x": -0.252,
                            "y": 0
                        },
                        "position": "center",
                        "transition": {
                            "in": "carouselRight",
                            "out": "carouselLeft"
                        },
                        "length": 5.6,
                        "scale": 1,
                        "fit": "crop"
                    }
                ]
            },
            {
                "clips": [
                    {
                        "asset": {
                            "type": "image",
                            "src": "{{image_1}}"
                        },
                        "start": 0,
                        "length": 6,
                        "effect": "zoomInSlow",
                        "transition": {
                            "in": "fade",
                            "out": "fade"
                        },
                        "offset": {
                            "x": 0,
                            "y": 0
                        },
                        "position": "center",
                        "fit": "crop",
                        "scale": 1
                    },
                    {
                        "asset": {
                            "type": "image",
                            "src": "{{image_2}}"
                        },
                        "effect": "slideLeftSlow",
                        "start": 5,
                        "length": 7,
                        "offset": {
                            "x": 0,
                            "y": 0
                        },
                        "position": "center",
                        "transition": {
                            "in": "fade",
                            "out": "fade"
                        }
                    },
                    {
                        "asset": {
                            "type": "image",
                            "src": "{{image_3}}"
                        },
                        "effect": "slideRightSlow",
                        "length": 7,
                        "transition": {
                            "in": "fade",
                            "out": "fade"
                        },
                        "offset": {
                            "x": 0,
                            "y": 0
                        },
                        "position": "center",
                        "start": 11
                    },
                    {
                        "asset": {
                            "type": "image",
                            "src": "{{image_4}}"
                        },
                        "effect": "slideUpSlow",
                        "start": 17,
                        "length": 7,
                        "transition": {
                            "in": "fade",
                            "out": "fade"
                        }
                    }
                ]
            }
        ]
    },
    "output": {
        "format": "mp4",
        "size": {
            "width": 1024,
            "height": 576
        }
    }
}
