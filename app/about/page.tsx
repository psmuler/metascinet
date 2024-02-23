
import { Avatar, Container, Heading, Link, Separator, Text } from '@radix-ui/themes'
import React from 'react'

const About = () => {
    return (
        <div className='p-10 max-w-2xl flex flex-col gap-10'>
            <div className=' flex flex-col gap-y-5'>
                <div>
                    <Heading>Metascience Actors Mapとは？</Heading>
                    <Separator size="4" />
                </div>
                <div className='flex flex-col gap-y-1'>
                    <Text>
                        科学のエコシステムをよくするための活動たちを可視化するサイトです。
                    </Text>
                    <Text>
                        <b>イノベーション創出や研究力のさらなる向上</b>を目指す中で、私たちはサイエンスとアカデミアの仕組みに関して日々多くの課題に直面しています。
                        それに応えるため産官学それぞれで、コミュニティ形成、政策・制度設計やサービス展開が活発に行われ始めています。
                        一方で、立ち向かう課題が複雑であることから、ご自身が活動される中で難しさやもどかしさを感じることがあるのではないでしょうか。
                    </Text>
                    <Text>
                        <b>サイエンスとアカデミアの課題に取り組む営みをMetascience (メタサイエンス) と定義</b>し、メタサイエンスを取り巻く実践知の共有と参加者同士の有機的なつながりの場の構築を目指す、
                        「手弁当」な勉強会の場として、昨年末より「Bento-kai」を立ち上げました。
                        そこで議論された俯瞰的な関わりの図を有志で形にしたのがこのサイトです。
                    </Text>
                    <div className='mt-4'></div>
                    <Text>
                        <div className='flex flex-col gap-y-2'>
                            <li>丸をクリック/タップすると、すでにさまざまな領域で活躍している人の名前や連絡先、関心を見ることができます</li>
                            <li>名前、連絡先、ご自身の活動や関心を入力することでネットワークに参加できます</li>
                            <li>入力された関心に基づいてAIが自動的にActor間にリンクを張る仕組みです</li>
                        </div>
                    </Text>

                </div>
            </div>
            <div className='flex flex-col gap-y-5'>
                <div>
                    <Heading>誰が運営しているの？</Heading>
                    <Separator size="4" />
                </div>
                <Text>
                    Metascience Actors Mapは、Metasci領域のネットワーキングイベント「Bento-kai」を運営している「Bento-kai事務局」が作成、運用しています。
                    Bento-kaiは2024年現在、おおよそ隔月で開催されており、イベント掲載サイトのページから登録いただくことで参加できる、対面メインのイベントです。
                    <Text color='blue'><Link href={"https://bento-kai-metasci.peatix.com/"}>第一回Bento-kaiの履歴</Link></Text>
                    から、Bento-kaiをフォローしていただくと、メールで通知がきます。
                </Text>
                <Text>事務局メンバー</Text>
                <div className='flex gap-x-5'>
                    <Avatar variant='soft' fallback='' size="8" />
                    <Avatar variant='soft' fallback='' size="8" />
                    <Avatar variant='soft' fallback='' size="8" />
                    <Avatar variant='soft' fallback='' size="8" />
                </div>

            </div>
            <div className=' flex flex-col gap-y-5'>
                <div>
                    <Heading>個人情報は安全に保護されているのか？</Heading>
                    <Separator size="4" />
                </div>
                <Text>
                    newページからご入力いただいた氏名（Name）、連絡先（Contact）、およびあなたの関心（Description）以外の一切の情報を取得しません。
                    なお現在はスパムメール対策の準備のため、連絡先登録機能を制限しております。
                </Text>
            </div>
        </div>
    )
}

export default About