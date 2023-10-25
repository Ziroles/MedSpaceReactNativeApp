import Svg, { Path } from 'react-native-svg';
import { StyleProp, ViewStyle } from 'react-native';

export default ({ style, children }: { style: StyleProp<ViewStyle>, children: React.ReactNode }) => (
    <Svg style={style} viewBox="0 0 60 60" height="60" width="90%">
        {children}
        <Path d="M0 73L6.5 73C13 73 26 73 39 71C52 69 65 65 78 64C91 63 104 65 117.2 65C130.3 65 143.7 63 156.8 62C170 61 183 61 196 63C209 65 222 69 235 71C248 73 261 73 274 71C287 69 300 65 313 63C326 61 339 61 352 62C365 63 378 65 391 66C404 67 417 67 430.2 66C443.3 65 456.7 63 469.8 64C483 65 496 69 509 69C522 69 535 65 548 63C561 61 574 61 587 60C600 59 613 57 626 58C639 59 652 63 665 63C678 63 691 59 704 56C717 53 730 51 743.2 54C756.3 57 769.7 65 782.8 68C796 71 809 69 822 66C835 63 848 59 861 59C874 59 887 63 893.5 65L900 67L900 0L893.5 0C887 0 874 0 861 0C848 0 835 0 822 0C809 0 796 0 782.8 0C769.7 0 756.3 0 743.2 0C730 0 717 0 704 0C691 0 678 0 665 0C652 0 639 0 626 0C613 0 600 0 587 0C574 0 561 0 548 0C535 0 522 0 509 0C496 0 483 0 469.8 0C456.7 0 443.3 0 430.2 0C417 0 404 0 391 0C378 0 365 0 352 0C339 0 326 0 313 0C300 0 287 0 274 0C261 0 248 0 235 0C222 0 209 0 196 0C183 0 170 0 156.8 0C143.7 0 130.3 0 117.2 0C104 0 91 0 78 0C65 0 52 0 39 0C26 0 13 0 6.5 0L0 0Z" fill="#ffcf7f"></Path>
        <Path d="M0 253L6.5 245C13 237 26 221 39 214C52 207 65 209 78 212C91 215 104 219 117.2 217C130.3 215 143.7 207 156.8 207C170 207 183 215 196 217C209 219 222 215 235 213C248 211 261 211 274 213C287 215 300 219 313 218C326 217 339 211 352 211C365 211 378 217 391 222C404 227 417 231 430.2 232C443.3 233 456.7 231 469.8 231C483 231 496 233 509 228C522 223 535 211 548 207C561 203 574 207 587 209C600 211 613 211 626 208C639 205 652 199 665 199C678 199 691 205 704 212C717 219 730 227 743.2 227C756.3 227 769.7 219 782.8 215C796 211 809 211 822 207C835 203 848 195 861 200C874 205 887 223 893.5 232L900 241L900 65L893.5 63C887 61 874 57 861 57C848 57 835 61 822 64C809 67 796 69 782.8 66C769.7 63 756.3 55 743.2 52C730 49 717 51 704 54C691 57 678 61 665 61C652 61 639 57 626 56C613 55 600 57 587 58C574 59 561 59 548 61C535 63 522 67 509 67C496 67 483 63 469.8 62C456.7 61 443.3 63 430.2 64C417 65 404 65 391 64C378 63 365 61 352 60C339 59 326 59 313 61C300 63 287 67 274 69C261 71 248 71 235 69C222 67 209 63 196 61C183 59 170 59 156.8 60C143.7 61 130.3 63 117.2 63C104 63 91 61 78 62C65 63 52 67 39 69C26 71 13 71 6.5 71L0 71Z" fill="#ffc668"></Path>
        <Path d="M0 319L6.5 311C13 303 26 287 39 283C52 279 65 287 78 289C91 291 104 287 117.2 281C130.3 275 143.7 267 156.8 269C170 271 183 283 196 286C209 289 222 283 235 282C248 281 261 285 274 289C287 293 300 297 313 296C326 295 339 289 352 286C365 283 378 283 391 289C404 295 417 307 430.2 312C443.3 317 456.7 315 469.8 311C483 307 496 301 509 293C522 285 535 275 548 273C561 271 574 277 587 280C600 283 613 283 626 283C639 283 652 283 665 284C678 285 691 287 704 292C717 297 730 305 743.2 305C756.3 305 769.7 297 782.8 291C796 285 809 281 822 276C835 271 848 265 861 272C874 279 887 299 893.5 309L900 319L900 239L893.5 230C887 221 874 203 861 198C848 193 835 201 822 205C809 209 796 209 782.8 213C769.7 217 756.3 225 743.2 225C730 225 717 217 704 210C691 203 678 197 665 197C652 197 639 203 626 206C613 209 600 209 587 207C574 205 561 201 548 205C535 209 522 221 509 226C496 231 483 229 469.8 229C456.7 229 443.3 231 430.2 230C417 229 404 225 391 220C378 215 365 209 352 209C339 209 326 215 313 216C300 217 287 213 274 211C261 209 248 209 235 211C222 213 209 217 196 215C183 213 170 205 156.8 205C143.7 205 130.3 213 117.2 215C104 217 91 213 78 210C65 207 52 205 39 212C26 219 13 235 6.5 243L0 251Z" fill="#ffbd51"></Path>
        <Path d="M0 379L6.5 371C13 363 26 347 39 342C52 337 65 343 78 344C91 345 104 341 117.2 334C130.3 327 143.7 317 156.8 320C170 323 183 339 196 344C209 349 222 343 235 341C248 339 261 341 274 345C287 349 300 355 313 353C326 351 339 341 352 338C365 335 378 339 391 348C404 357 417 371 430.2 377C443.3 383 456.7 381 469.8 377C483 373 496 367 509 359C522 351 535 341 548 336C561 331 574 331 587 331C600 331 613 331 626 332C639 333 652 335 665 336C678 337 691 337 704 344C717 351 730 365 743.2 365C756.3 365 769.7 351 782.8 343C796 335 809 333 822 331C835 329 848 327 861 335C874 343 887 361 893.5 370L900 379L900 317L893.5 307C887 297 874 277 861 270C848 263 835 269 822 274C809 279 796 283 782.8 289C769.7 295 756.3 303 743.2 303C730 303 717 295 704 290C691 285 678 283 665 282C652 281 639 281 626 281C613 281 600 281 587 278C574 275 561 269 548 271C535 273 522 283 509 291C496 299 483 305 469.8 309C456.7 313 443.3 315 430.2 310C417 305 404 293 391 287C378 281 365 281 352 284C339 287 326 293 313 294C300 295 287 291 274 287C261 283 248 279 235 280C222 281 209 287 196 284C183 281 170 269 156.8 267C143.7 265 130.3 273 117.2 279C104 285 91 289 78 287C65 285 52 277 39 281C26 285 13 301 6.5 309L0 317Z" fill="#f3ae3f"></Path>
        <Path d="M0 523L6.5 518C13 513 26 503 39 501C52 499 65 505 78 506C91 507 104 503 117.2 499C130.3 495 143.7 491 156.8 495C170 499 183 511 196 517C209 523 222 523 235 518C248 513 261 503 274 498C287 493 300 493 313 497C326 501 339 509 352 514C365 519 378 521 391 519C404 517 417 511 430.2 507C443.3 503 456.7 501 469.8 504C483 507 496 515 509 514C522 513 535 503 548 496C561 489 574 485 587 486C600 487 613 493 626 497C639 501 652 503 665 500C678 497 691 489 704 492C717 495 730 509 743.2 512C756.3 515 769.7 507 782.8 506C796 505 809 511 822 512C835 513 848 509 861 509C874 509 887 513 893.5 515L900 517L900 377L893.5 368C887 359 874 341 861 333C848 325 835 327 822 329C809 331 796 333 782.8 341C769.7 349 756.3 363 743.2 363C730 363 717 349 704 342C691 335 678 335 665 334C652 333 639 331 626 330C613 329 600 329 587 329C574 329 561 329 548 334C535 339 522 349 509 357C496 365 483 371 469.8 375C456.7 379 443.3 381 430.2 375C417 369 404 355 391 346C378 337 365 333 352 336C339 339 326 349 313 351C300 353 287 347 274 343C261 339 248 337 235 339C222 341 209 347 196 342C183 337 170 321 156.8 318C143.7 315 130.3 325 117.2 332C104 339 91 343 78 342C65 341 52 335 39 340C26 345 13 361 6.5 369L0 377Z" fill="#da9b35"></Path>
        <Path d="M0 601L6.5 601C13 601 26 601 39 601C52 601 65 601 78 601C91 601 104 601 117.2 601C130.3 601 143.7 601 156.8 601C170 601 183 601 196 601C209 601 222 601 235 601C248 601 261 601 274 601C287 601 300 601 313 601C326 601 339 601 352 601C365 601 378 601 391 601C404 601 417 601 430.2 601C443.3 601 456.7 601 469.8 601C483 601 496 601 509 601C522 601 535 601 548 601C561 601 574 601 587 601C600 601 613 601 626 601C639 601 652 601 665 601C678 601 691 601 704 601C717 601 730 601 743.2 601C756.3 601 769.7 601 782.8 601C796 601 809 601 822 601C835 601 848 601 861 601C874 601 887 601 893.5 601L900 601L900 515L893.5 513C887 511 874 507 861 507C848 507 835 511 822 510C809 509 796 503 782.8 504C769.7 505 756.3 513 743.2 510C730 507 717 493 704 490C691 487 678 495 665 498C652 501 639 499 626 495C613 491 600 485 587 484C574 483 561 487 548 494C535 501 522 511 509 512C496 513 483 505 469.8 502C456.7 499 443.3 501 430.2 505C417 509 404 515 391 517C378 519 365 517 352 512C339 507 326 499 313 495C300 491 287 491 274 496C261 501 248 511 235 516C222 521 209 521 196 515C183 509 170 497 156.8 493C143.7 489 130.3 493 117.2 497C104 501 91 505 78 504C65 503 52 497 39 499C26 501 13 511 6.5 516L0 521Z" fill="#c2882c"></Path>      
    </Svg>
);