const text1 = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque vel veniam molestiae quam quia praesentium illo, iusto itaque veritatis quod, mollitia laboriosam. Alias velit molestiae odio distinctio dicta necessitatibus ducimus possimus nesciunt, neque modi tempore veritatis numquam dolore. In laudantium distinctio enim dolor impedit itaque. Necessitatibus a recusandae natus ratione impedit. Libero, earum eius quaerat natus voluptatem mollitia eos officia officiis similique, blanditiis perspiciatis numquam laudantium adipisci corrupti, omnis rem non molestias facilis magni aliquam velit. Dicta saepe quibusdam reiciendis reprehenderit quas quos, sed neque vel eum aspernatur, delectus omnis repudiandae explicabo iure atque nostrum quo harum facilis obcaecati ut."

const text2 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, adipisci exercitationem modi quibusdam eos quam dolorem quasi et rem corrupti laboriosam repudiandae quae distinctio necessitatibus labore esse sunt sit quaerat quia. Veniam doloremque accusamus laboriosam asperiores, natus, facere sit aliquid ex, debitis magni enim beatae similique ad deserunt vel? Unde, asperiores reprehenderit. Obcaecati provident aperiam aut rem facere cupiditate cum. Maxime possimus perspiciatis neque excepturi quod amet qui, odit voluptatem laborum quam incidunt voluptatum beatae, ex magni enim architecto. Voluptatum, sit tempora rem ea repellat ab laudantium vitae et aperiam, exercitationem laboriosam ad? Quod, accusamus alias ea quam mollitia dignissimos beatae tempora eveniet ratione veniam reprehenderit facilis consequuntur autem porro nihil voluptates quisquam architecto ipsam quas maxime et officiis reiciendis at natus. Cum sapiente error nostrum delectus officia deserunt sit nobis, dolore id neque officiis hic, quos dicta repellat commodi! Sed corrupti quo in, saepe ea architecto est praesentium excepturi beatae officia quasi esse quibusdam quidem laborum quos quisquam adipisci reprehenderit voluptate consectetur recusandae eveniet fugiat mollitia? Fugit eius reprehenderit optio, non excepturi dolorem ducimus animi dolore tenetur ipsa, obcaecati esse sunt perspiciatis, soluta neque eum? Ratione cum velit expedita veritatis quod distinctio voluptas? Amet provident doloribus atque rerum mollitia!"

const text3 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut totam, impedit nostrum dolore assumenda in, dolor molestias natus eveniet suscipit temporibus ullam eius et exercitationem facere minus similique ducimus soluta. Possimus sed asperiores dignissimos alias repellat at, officiis nihil neque ratione a, nobis maxime quaerat assumenda hic sequi quos praesentium minus consequatur, deleniti ex adipisci magni fugit. Velit autem voluptatum quia tenetur consequatur? Recusandae, sed! Sit labore ipsum pariatur reiciendis libero debitis nobis qui id corrupti, vero tenetur assumenda accusantium, earum eius maxime laborum nihil fuga doloribus? Mollitia enim vero consequatur laudantium harum laboriosam autem quisquam veniam fugiat fuga maxime quos, possimus illum incidunt sunt labore ipsa ad impedit eaque perferendis dolores! Quo soluta, quae laborum animi maxime tempore facilis eum itaque! Adipisci maxime aut provident doloremque autem nobis officiis ducimus nihil ipsa! Itaque rem laudantium beatae. Necessitatibus enim modi, ipsam ex rem deserunt qui? Nostrum a libero, molestias dolor obcaecati nam sapiente labore harum. Tempore qui atque quas pariatur corrupti suscipit id quisquam, dolorum, doloremque, amet impedit nobis tenetur. Explicabo sunt placeat quos! Alias voluptatem quas adipisci, reiciendis ut maiores voluptatum earum dignissimos? Necessitatibus amet error, quos laudantium ipsum incidunt ducimus sunt et doloribus aut. Molestias asperiores alias quod, id delectus dolorum a omnis facere fuga aut, nulla, ducimus beatae nemo quos magni quas perspiciatis doloribus eaque provident enim minima. Illum, quae culpa nesciunt accusantium animi tempore voluptatem vitae temporibus ipsam blanditiis autem, beatae at. Neque eius nulla omnis asperiores ad quo alias perspiciatis velit eveniet nihil necessitatibus possimus porro, sunt itaque eum maxime debitis in nemo? Fuga optio vero quia beatae illo exercitationem in sint quae, nostrum consequuntur voluptates quasi aliquam est natus nihil magni quo a harum assumenda nobis quis eum laboriosam libero. Velit neque quidem reiciendis maxime, architecto magnam nesciunt excepturi doloribus illo tempore rerum aliquid dignissimos veniam saepe quisquam minus obcaecati, debitis sunt officia vel quas. Saepe incidunt voluptate itaque modi odio, molestiae nobis. Hic voluptatibus architecto, adipisci animi iusto cum natus, libero qui perferendis cupiditate sed, delectus id dignissimos. Totam dicta id dolore eius, molestiae voluptate? Suscipit corporis, doloribus possimus omnis aspernatur, eum repellendus facere eos quia vel quidem! Quod iusto vel pariatur repellendus veritatis soluta et exercitationem officia accusamus, aut rem aspernatur repellat perferendis dolorem omnis magnam, dolores ad architecto modi! Labore ea fugiat distinctio expedita accusantium porro tenetur corrupti debitis quasi eum voluptate harum, maiores cupiditate repellendus, optio fuga veniam? Id, necessitatibus."

// Helper function to shorten content by a specified number of characters
function shortenContent(content, len) {
    slicedContent = [];
    slicedContent.push(content.slice(0,len));
    slicedContent.push(content.slice(len));
    return slicedContent;
}

const articlesArray = [shortenContent(text1, 400), shortenContent(text2, 400), shortenContent(text3, 400)];

const containerElement = document.querySelector('.container');

articlesArray.forEach( (item, index) => {

    let articleDiv = document.createElement('div');
    articleDiv.id = 'article-div-' + index;
    articleDiv.classList.add('section');
    containerElement.appendChild(articleDiv);

    let articlePara = document.createElement('p');
    articlePara.id = 'article-p-' + index;
    articlePara.textContent = item[0];
    articleDiv.appendChild(articlePara);

    let articleSpan = document.createElement('span');
    articleSpan.id = 'article-span-' + index;
    articleSpan.classList.add('less-text')
    articleSpan.textContent = item[1];
    articlePara.appendChild(articleSpan);

    let articleBtn = document.createElement('button');
    articleBtn.innerHTML = "Read More";
    articleBtn.id = 'article-btn-' + index;
    articleDiv.appendChild(articleBtn);

    let el = document.getElementById(articleBtn.id);
    el.addEventListener('click', () => {
        articleSpan.classList.toggle('more-text');
        articleSpan.classList.toggle('less-text');
        
        if (articleBtn.innerHTML === 'Read More') {
            articleBtn.innerHTML = 'Read Less';
        } else {
            articleBtn.innerHTML = 'Read More';
        }
    })
})
