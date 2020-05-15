class FollowsController < ApplicationController
  before_action :require_logged_in!

  def create
    # simulate latency
    sleep(1)

    @follow = current_user.out_follows.create!(followee_id: params[:user_id])

    # #
    # follower_id = current_user.id
    # followee_id = params[:user_id]

    # @follow = Follow.new(follower_id: follower_id, followee_id: followee_id)
    # @follow.save!
    # #

    respond_to do |format|
      format.html { redirect_to request.referrer }
      format.json { render json: @follow }
    end
  end

  def destroy
    # simulate latency
    sleep(1)

    @follow = current_user.out_follows.find_by(followee_id: params[:user_id])
    @follow.destroy!

    respond_to do |format|
      format.html { redirect_to request.referrer }
      format.json { render json: @follow }
    end
  end
end
